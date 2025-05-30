"use client";

import { Alert, AlertDescription } from "@/common/components/ui/alert";
import { Button } from "@/common/components/ui/button";
import { Card, CardContent } from "@/common/components/ui/card";
import { Input } from "@/common/components/ui/input";
import { Label } from "@/common/components/ui/label";
import { Textarea } from "@/common/components/ui/textarea";
import { createPostAction } from "@/app/_actions/blog";
import { Loader2 } from "lucide-react";
import { useActionState, useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export default function PostForm() {
  const initialState = {
    message: "",
    errors: {},
    formData: {
      title: "",
      tag: "",
      content: "",
    },
  };

  const queryClient = useQueryClient();
  const router = useRouter();

  // 폼 액션의 결과 기반으로 state를 업데이트 하는 Hook
  const [state, formAction, isPending] = useActionState(
    createPostAction,
    initialState,
  );

  useEffect(() => {
    if (state.success) {
      //invalidateQueries : 캐시 무효화
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      router.push("/");
    }
  }, [state, router, queryClient]);

  return (
    <form action={formAction}>
      <Card className="mx-auto max-w-2xl">
        <CardContent className="p-6">
          {state?.message && (
            <Alert
              className={`mb-6 ${state.errors ? "bg-red-50" : "bg-green-50"}`}
            >
              <AlertDescription>{state.message}</AlertDescription>
            </Alert>
          )}
          {/* 제목 입력 */}
          <div className="mb-6 space-y-2">
            <Label htmlFor="title">제목</Label>
            <Input
              id="title"
              placeholder="제목을 입력해주세요"
              className="h-12 text-lg"
              name="title"
              defaultValue={state.formData?.title}
            />
            {state.errors?.title && (
              <p className="text-sm text-red-500">{state.errors.title[0]}</p>
            )}
          </div>

          {/* 태그 입력 */}
          <div className="mb-6 space-y-2">
            <Label htmlFor="tag">태그</Label>
            <Input
              id="tag"
              placeholder="태그를 입력해주세요"
              className="h-12"
              name="tag"
              defaultValue={state.formData?.tag}
            />
            {state.errors?.tag && (
              <p className="text-sm text-red-500">{state.errors.tag[0]}</p>
            )}
          </div>

          {/* 본문 입력 */}
          <div className="space-y-2">
            <Label htmlFor="content">본문</Label>
            <Textarea
              id="content"
              placeholder="작성해주세요"
              className="min-h-[400px] resize-none"
              name="content"
              defaultValue={state.formData?.content}
            />
            {state.errors?.content && (
              <p className="text-sm text-red-500">{state.errors.content[0]}</p>
            )}
          </div>

          {/* 버튼 영역 */}
          <div className="mt-6 flex justify-end gap-2">
            <Button disabled={isPending}>
              {isPending && (
                <Loader2 className="mr-2 hidden h-4 w-4 animate-spin" />
              )}
              발행하기
            </Button>
          </div>
        </CardContent>
      </Card>
    </form>
  );
}
