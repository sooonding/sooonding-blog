import PostForm from "@/components/features/blog/PostForm";

export default function WritePage() {
  return (
    <div className="container py-10">
      {/* // action을 prop으로 넘길 땐 함수명뒤에가 Action이거나 prop명이 action이어야 한다. */}
      <PostForm />
    </div>
  );
}
