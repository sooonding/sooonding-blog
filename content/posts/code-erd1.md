---
title: "데이터 ERD 작성해보기"
slug: "code-erd1"
description: "ERD"
tags: ["sql", "DA"]
author: "seongjin jeon"
date: "2025-09-05"
modifiedDate: "2025-09-05T08:51:00.000Z"
notionId: "2659b006-ca58-801d-91cf-f361fc11f123"
---
Fandom-k(가제) 서비스의 디자인 화면을 분석하여 필요한 엔티티를 정의하고, 이들 간의 관계를 ERD로 작성해보았다.


### [과정]

1. 메모 ( ERD를 어떻게 그릴지 내 나름대로 툴을 정하여 이용 )
2. 데이터 명세서 정리 (개념적 모델링)
3. 최종 ERD 작성

### 메모


앱 디자인 화면을 보면서 핵심 기능들을 파악:

- 유저 : 유저 기본 정보(이름, 유저 이미지등)
- 아티스트 정보: 아티스트 프로필, 팀 정보
- 투표 시스템 : 크레딧을 이용한 투표 기능
- 조공 시스템 : 지하철 광고 및 다양한 프로젝트 지원
- 팔로우 기능 : 좋아하는 아티스트 팔로우

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQRJ7527%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T010312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICfy5WV8HuB51do15%2FQXms0iY%2FVtJFJqGad%2BtIUFJIu%2FAiA9QfqEPkVs5ppJ9mX2KwGemlBqdiYaHWNXqMlKkfXhzCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMcsfcpME%2BDGyKwYUeKtwDY2BFQ8Iou55FtU7qYvIZA%2FjT53xpOZD1PVmZLFafmPdRylv%2FEyPEqSgVxkQMA%2FYpI9O1fKKyv3qFXj724oR4DzCuXy2Z8775Vf%2FsQLgkajEAQ6XQPoXVoyVBBww2065NEaaOpgqok%2BeBjOvr%2FLGYkblWEW2ttUAI%2BYxa%2FC%2FHDk6rqpYG771b2L%2FwglB2aDOdhyYu6HaBLzZJgt7NpPj6qs%2F4Ei6vTsBOdiirtT2P%2F5CAucOjsF1eS5oDYY2yR6zZV8kpMy971Y7DQ6Eb0Dzrp9wAQFOCnS72bNWQ2EqtnjSB4hCtxrCvT%2BvqmydqETpL4ZFSy%2BwUii3%2Bf%2FMoS6Ow50MYBhYhWNPqKtwovKL2R2C0sXaS04Nb%2FRxl3Ay15Sce%2Buf08ipHLM5vw62YPxP3Txo7P01j5JpNzVRVF%2FsZ6W%2Bg%2FQZg1YQ6S%2Fza2U1DgXQaBRZqqhFJd404%2BMSPAMMd59FPSZO7dx6NxerFwsxVrYU1A9ICrS7seDX8PP3Bj6xexLBz4mmz4gdTHfkVgqa5%2Fpv30klu7yU6CnOae57HJ0nga%2BeVwneHvUrMsDzID%2FpM96u2UxdLEWwDYrMswn3625vmeomIW0ZUDWqPv3Rga6DAPXoLQZ1IFw6FRgcwq5SZyQY6pgFPaEG%2FKFSzBG1PLOXSh%2FRdLJxZyx567HDfwhQwTo85nc9bCrrplMPrqCVJTUukrKvlSeXnNTa6O7p1smGgqmaWblYnpo%2BXSa1Agn1BH7sIoL9T%2Fh5ZmrTVkGfHPEAvPkruEoaB%2FtAgWfEG0WRk6k1W6JlDO8O3xYHwbZPodBe9B7vQXP3BPM4AK9yibubdZxzxEU3faozLHKAkLRYZeHJBCE6crhg7&X-Amz-Signature=cd6486987e51be92cd0115bae3a6e1c1920ea5f0c16f99e3f37aa6f7c81f41ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDERB3U6%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T010312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvc3YbKzOfrx0dq9G8dGkVe0Czaf109zWlx2qsEjgdvAIhALZjtr7nvDky%2BQKvuJ%2BinoQChb%2B3D8hd8OoKrjmLecqaKv8DCHoQABoMNjM3NDIzMTgzODA1IgwbDHJ8f4Ot8d7KORMq3AMR1lv1qmRoPVxcIaMNAl4LDe8cjMJv9NzooILiUjDS1bpvV1DlpYzejucXU5zmOjr749n1mQj%2FJOhk1mibwSa8aclyN2FrixYFHX1oX5rMWCG6%2FX3stDrkszOKeTyn9O7Ovs175XdpbCTc%2FrY1ZclfY1lmOKhHbm3mtl791N6yOYSpWejsMLklO44BCJ8cephlcyeWw77PBf9Yc7hbGWcrncuuBNHVGgr23UQzHrBFZ5XiUWNQvLBpkfOXXANZjpmgl5tC4DiYXJDLU4tE%2F04pnG9LU%2FLzwa9VoDYk%2F7%2Bz5pzd8hmZPIqyRBXsWVuFzkvWAM6nzC%2Ff3Yteue%2B8Ah6GzC30%2FA44LCp3UNnpU3YaMe3qdM9YGa%2BB1Wo8jZxji2lhKMiJKxfz9qbm5RsVn1JydnjjQEftNAsLKMwhxcoB6LWwa49hVtf7hBSzYhSGOH08etoh4pOFSwdIuZS28APE5SBQirH%2FsQaviowEj9rDUmFt6kFDBFmhC6%2FLjY1MJ%2FqJJrAx33zucFGMiuAsRVluhkqblTJ06mXgsufKgF%2FmECTaduUeWmqscgQFa7E%2Bpj44QX7ydV0vsLEwICfIVHzATvwF3rFjqovp2%2BBtInUPVEeHYK47HVnARD24lzColZnJBjqkAQFYLb76ITJrP120D4aY%2BstV4uQ75pdASf5%2F2RR1Y9S4%2BHLllJ%2Fyd%2BMsuw6NuHKplA8d3TbSYKuEeSpPEqyYLw9VVu0%2FrW0t5uyGcabZ1QN4TreAz5%2FsNoQC8yZwd8qA%2Bj2%2Fkd54A2DLuSXwWa0LpSI%2BezxgRpmY%2BizaI7LmwFYq6MUfx95yXp7anE%2Bs0Pnmo%2FgDsY9usHrzd2vGOEdn83XqcCHM&X-Amz-Signature=dbc0aa1a2a59de8ad512f1142ead65e853a6838872a8df365784c0af1b9cb711&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDERB3U6%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T010312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvc3YbKzOfrx0dq9G8dGkVe0Czaf109zWlx2qsEjgdvAIhALZjtr7nvDky%2BQKvuJ%2BinoQChb%2B3D8hd8OoKrjmLecqaKv8DCHoQABoMNjM3NDIzMTgzODA1IgwbDHJ8f4Ot8d7KORMq3AMR1lv1qmRoPVxcIaMNAl4LDe8cjMJv9NzooILiUjDS1bpvV1DlpYzejucXU5zmOjr749n1mQj%2FJOhk1mibwSa8aclyN2FrixYFHX1oX5rMWCG6%2FX3stDrkszOKeTyn9O7Ovs175XdpbCTc%2FrY1ZclfY1lmOKhHbm3mtl791N6yOYSpWejsMLklO44BCJ8cephlcyeWw77PBf9Yc7hbGWcrncuuBNHVGgr23UQzHrBFZ5XiUWNQvLBpkfOXXANZjpmgl5tC4DiYXJDLU4tE%2F04pnG9LU%2FLzwa9VoDYk%2F7%2Bz5pzd8hmZPIqyRBXsWVuFzkvWAM6nzC%2Ff3Yteue%2B8Ah6GzC30%2FA44LCp3UNnpU3YaMe3qdM9YGa%2BB1Wo8jZxji2lhKMiJKxfz9qbm5RsVn1JydnjjQEftNAsLKMwhxcoB6LWwa49hVtf7hBSzYhSGOH08etoh4pOFSwdIuZS28APE5SBQirH%2FsQaviowEj9rDUmFt6kFDBFmhC6%2FLjY1MJ%2FqJJrAx33zucFGMiuAsRVluhkqblTJ06mXgsufKgF%2FmECTaduUeWmqscgQFa7E%2Bpj44QX7ydV0vsLEwICfIVHzATvwF3rFjqovp2%2BBtInUPVEeHYK47HVnARD24lzColZnJBjqkAQFYLb76ITJrP120D4aY%2BstV4uQ75pdASf5%2F2RR1Y9S4%2BHLllJ%2Fyd%2BMsuw6NuHKplA8d3TbSYKuEeSpPEqyYLw9VVu0%2FrW0t5uyGcabZ1QN4TreAz5%2FsNoQC8yZwd8qA%2Bj2%2Fkd54A2DLuSXwWa0LpSI%2BezxgRpmY%2BizaI7LmwFYq6MUfx95yXp7anE%2Bs0Pnmo%2FgDsY9usHrzd2vGOEdn83XqcCHM&X-Amz-Signature=822de38f4ecc577785712ae7a70905477165c6832f292f723aeaa49d16cc6a46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDERB3U6%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T010312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvc3YbKzOfrx0dq9G8dGkVe0Czaf109zWlx2qsEjgdvAIhALZjtr7nvDky%2BQKvuJ%2BinoQChb%2B3D8hd8OoKrjmLecqaKv8DCHoQABoMNjM3NDIzMTgzODA1IgwbDHJ8f4Ot8d7KORMq3AMR1lv1qmRoPVxcIaMNAl4LDe8cjMJv9NzooILiUjDS1bpvV1DlpYzejucXU5zmOjr749n1mQj%2FJOhk1mibwSa8aclyN2FrixYFHX1oX5rMWCG6%2FX3stDrkszOKeTyn9O7Ovs175XdpbCTc%2FrY1ZclfY1lmOKhHbm3mtl791N6yOYSpWejsMLklO44BCJ8cephlcyeWw77PBf9Yc7hbGWcrncuuBNHVGgr23UQzHrBFZ5XiUWNQvLBpkfOXXANZjpmgl5tC4DiYXJDLU4tE%2F04pnG9LU%2FLzwa9VoDYk%2F7%2Bz5pzd8hmZPIqyRBXsWVuFzkvWAM6nzC%2Ff3Yteue%2B8Ah6GzC30%2FA44LCp3UNnpU3YaMe3qdM9YGa%2BB1Wo8jZxji2lhKMiJKxfz9qbm5RsVn1JydnjjQEftNAsLKMwhxcoB6LWwa49hVtf7hBSzYhSGOH08etoh4pOFSwdIuZS28APE5SBQirH%2FsQaviowEj9rDUmFt6kFDBFmhC6%2FLjY1MJ%2FqJJrAx33zucFGMiuAsRVluhkqblTJ06mXgsufKgF%2FmECTaduUeWmqscgQFa7E%2Bpj44QX7ydV0vsLEwICfIVHzATvwF3rFjqovp2%2BBtInUPVEeHYK47HVnARD24lzColZnJBjqkAQFYLb76ITJrP120D4aY%2BstV4uQ75pdASf5%2F2RR1Y9S4%2BHLllJ%2Fyd%2BMsuw6NuHKplA8d3TbSYKuEeSpPEqyYLw9VVu0%2FrW0t5uyGcabZ1QN4TreAz5%2FsNoQC8yZwd8qA%2Bj2%2Fkd54A2DLuSXwWa0LpSI%2BezxgRpmY%2BizaI7LmwFYq6MUfx95yXp7anE%2Bs0Pnmo%2FgDsY9usHrzd2vGOEdn83XqcCHM&X-Amz-Signature=12eaba849d673d507342ee753b9783ac3bb4455c011bc02899daac89d216b31f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDERB3U6%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T010312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvc3YbKzOfrx0dq9G8dGkVe0Czaf109zWlx2qsEjgdvAIhALZjtr7nvDky%2BQKvuJ%2BinoQChb%2B3D8hd8OoKrjmLecqaKv8DCHoQABoMNjM3NDIzMTgzODA1IgwbDHJ8f4Ot8d7KORMq3AMR1lv1qmRoPVxcIaMNAl4LDe8cjMJv9NzooILiUjDS1bpvV1DlpYzejucXU5zmOjr749n1mQj%2FJOhk1mibwSa8aclyN2FrixYFHX1oX5rMWCG6%2FX3stDrkszOKeTyn9O7Ovs175XdpbCTc%2FrY1ZclfY1lmOKhHbm3mtl791N6yOYSpWejsMLklO44BCJ8cephlcyeWw77PBf9Yc7hbGWcrncuuBNHVGgr23UQzHrBFZ5XiUWNQvLBpkfOXXANZjpmgl5tC4DiYXJDLU4tE%2F04pnG9LU%2FLzwa9VoDYk%2F7%2Bz5pzd8hmZPIqyRBXsWVuFzkvWAM6nzC%2Ff3Yteue%2B8Ah6GzC30%2FA44LCp3UNnpU3YaMe3qdM9YGa%2BB1Wo8jZxji2lhKMiJKxfz9qbm5RsVn1JydnjjQEftNAsLKMwhxcoB6LWwa49hVtf7hBSzYhSGOH08etoh4pOFSwdIuZS28APE5SBQirH%2FsQaviowEj9rDUmFt6kFDBFmhC6%2FLjY1MJ%2FqJJrAx33zucFGMiuAsRVluhkqblTJ06mXgsufKgF%2FmECTaduUeWmqscgQFa7E%2Bpj44QX7ydV0vsLEwICfIVHzATvwF3rFjqovp2%2BBtInUPVEeHYK47HVnARD24lzColZnJBjqkAQFYLb76ITJrP120D4aY%2BstV4uQ75pdASf5%2F2RR1Y9S4%2BHLllJ%2Fyd%2BMsuw6NuHKplA8d3TbSYKuEeSpPEqyYLw9VVu0%2FrW0t5uyGcabZ1QN4TreAz5%2FsNoQC8yZwd8qA%2Bj2%2Fkd54A2DLuSXwWa0LpSI%2BezxgRpmY%2BizaI7LmwFYq6MUfx95yXp7anE%2Bs0Pnmo%2FgDsY9usHrzd2vGOEdn83XqcCHM&X-Amz-Signature=349c9148d72683c7c4e1f32f199bcae1a7870e24ec8ff31071bc48be7a348cd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDERB3U6%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T010312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvc3YbKzOfrx0dq9G8dGkVe0Czaf109zWlx2qsEjgdvAIhALZjtr7nvDky%2BQKvuJ%2BinoQChb%2B3D8hd8OoKrjmLecqaKv8DCHoQABoMNjM3NDIzMTgzODA1IgwbDHJ8f4Ot8d7KORMq3AMR1lv1qmRoPVxcIaMNAl4LDe8cjMJv9NzooILiUjDS1bpvV1DlpYzejucXU5zmOjr749n1mQj%2FJOhk1mibwSa8aclyN2FrixYFHX1oX5rMWCG6%2FX3stDrkszOKeTyn9O7Ovs175XdpbCTc%2FrY1ZclfY1lmOKhHbm3mtl791N6yOYSpWejsMLklO44BCJ8cephlcyeWw77PBf9Yc7hbGWcrncuuBNHVGgr23UQzHrBFZ5XiUWNQvLBpkfOXXANZjpmgl5tC4DiYXJDLU4tE%2F04pnG9LU%2FLzwa9VoDYk%2F7%2Bz5pzd8hmZPIqyRBXsWVuFzkvWAM6nzC%2Ff3Yteue%2B8Ah6GzC30%2FA44LCp3UNnpU3YaMe3qdM9YGa%2BB1Wo8jZxji2lhKMiJKxfz9qbm5RsVn1JydnjjQEftNAsLKMwhxcoB6LWwa49hVtf7hBSzYhSGOH08etoh4pOFSwdIuZS28APE5SBQirH%2FsQaviowEj9rDUmFt6kFDBFmhC6%2FLjY1MJ%2FqJJrAx33zucFGMiuAsRVluhkqblTJ06mXgsufKgF%2FmECTaduUeWmqscgQFa7E%2Bpj44QX7ydV0vsLEwICfIVHzATvwF3rFjqovp2%2BBtInUPVEeHYK47HVnARD24lzColZnJBjqkAQFYLb76ITJrP120D4aY%2BstV4uQ75pdASf5%2F2RR1Y9S4%2BHLllJ%2Fyd%2BMsuw6NuHKplA8d3TbSYKuEeSpPEqyYLw9VVu0%2FrW0t5uyGcabZ1QN4TreAz5%2FsNoQC8yZwd8qA%2Bj2%2Fkd54A2DLuSXwWa0LpSI%2BezxgRpmY%2BizaI7LmwFYq6MUfx95yXp7anE%2Bs0Pnmo%2FgDsY9usHrzd2vGOEdn83XqcCHM&X-Amz-Signature=02b7a6c6f8c3a36a22ced9a0ff57c31a472499b77e6d2467e205684b09c1e1be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### DDL


    ```sql
    -- user_id : int (pk)
    -- user_name : VARCHAR(20) NOT NULL, | 이름
    -- user_profile :  | 유저 이미지
    -- email : VARCHAR(20) NOT NULL, | 이메일
    -- nick_name : VARCHAR(20) NOT NULL, | 닉네임
    -- password : VARCHAR(20) NOT NULL, | 패스워드
    -- created_at : DATETOME NOT NULL  | 생성 일시
    -- is_active :  BOOL, | 유저 활성화 여부
     
    CREATE TABLE users (
      user_id INT PRIMARY KEY AUTO_INCREMENT,
      user_name VARCHAR(20) NOT NULL,
      user_profile VARCHAR(255),
      email VARCHAR(20) NOT NULL,
      nick_name VARCHAR(20) NOT NULL UNIQUE,
      password VARCHAR(20) NOT NULL,
      created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      is_active BOOLEAN NOT NULL DEFAULT TRUE
    );
    
    
    -- artists(아티스트)
    
    -- artist_id : int (PK)
    -- artist_name : VARCHAR(20) NOT NULL, | 아티스트 이름
    -- artist_company : VARCHAR(20), | 소속사
    -- artist_profile : VARCHAR(255), | 프로필 이미지
    -- artist_debut_date : DATETIME, | 데뷔일
    -- created_at : DATETIME | 등록 일시
    
    
    CREATE TABLE artists (
      artist_id INT PRIMARY KEY AUTO_INCREMENT,
      artist_name VARCHAR(20) NOT NULL,
      artist_company VARCHAR(20),
      artist_profile VARCHAR(255),
      artist_debut_date DATETIME NOT NULL,
      created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
    
    -- follow_id : int (PK)
    -- user_id : int NOT NULL | 유저 아이디 (FK)
    -- artist_id :  아티스트 아이디(FK)
    -- followed_at DATETIME | 팔로우 생성 일시 
    
    
    CREATE TABLE follows (
      follow_id INT PRIMARY KEY AUTO_INCREMENT,
      user_id INT NOT NULL,
      artist_id INT NOT NULL,
      followed_at DATETIME NOT NULL,
      -- 외래 키
      FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE, -- 유저 탈퇴시 유저의 팔로우 기록 삭제
      FOREIGN KEY (artist_id) REFERENCES artists(artist_id) ON DELETE CASCADE -- 아티스트 삭제 시 아티스트를 팔로우한 모든 기록 삭제
    );
    
    
    
    
    -- 투표 테이블
    -- vote_id : int (PK)
    -- artist_id : int (FK)
    -- user_id : int (FK)
    -- vote_count : INT | 투표 수
    -- support_credit : int | 후원 크레딧
    -- vote_at : DATETIME | 투표 일시
    
    CREATE TABLE votes (
      vote_id INT PRIMARY KEY AUTO_INCREMENT,
      artist_id INT NOT NULL,
      user_id INT NOT NULL,
      vote_count INT NOT NULL,
      vote_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    
      -- 외래 키
      FOREIGN KEY (artist_id) REFERENCES artists(artist_id) ON DELETE CASCADE,
      FOREIGN KEY (user_id) REFERENCES users(user_id)
    );
    
    -- credit_id : int (PK)
    -- user_id : int NOT NULL | 유저 아이디 (FK)
    -- credit_current :  INT | credit 갯수
    -- credit_type : VARCHAR |  거래타입(사용/충전/환불)
    -- credit_at : datetime |  크레딧 거래 일시
     
    CREATE TABLE credits (
      credit_id INT PRIMARY KEY AUTO_INCREMENT,
      user_id INT NOT NULL,
      credit_current INT NOT NULL,
      credit_type ENUM('charge', 'use', 'refund') NOT NULL,
      credit_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    
      FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
    );
    
    
    -- project_id : int (PK)
    -- artist_id : int | 아티스트 ID (FK)
    -- artist_type : boolean | 
    -- project_title : VARCHAR | 조공 타이틀
    -- project_location_name : VARCHAR | 조공 위치
    -- start_date : DATETIME  | 시작일
    -- end_date : DATETIME | 종료일
    -- created_at : DATETIME | 생성 일시 
    -- target_credit : int | 목표 크레딧 
    -- current_credit : int | 현재 크레딧
    -- project_type :  VARCHAR | 조공 타입(광고,생일,)
    
    
    CREATE TABLE projects (
      project_id INT PRIMARY KEY AUTO_INCREMENT,
      artist_id INT NOT NULL,
      artist_type BOOLEAN NOT NULL,
      project_title VARCHAR(20) NOT NULL,
      project_location_name VARCHAR(20) NOT NULL,
      start_date DATETIME NOT NULL,
      end_date DATETIME NOT NULL,
      created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      target_credit INT NOT NULL,
      current_credit INT NOT NULL,
      project_type VARCHAR(20) NOT NULL,
    
      FOREIGN KEY (artist_id) REFERENCES artists(artist_id)
    );
    
    
    -- support_id : int (PK)
    -- project_id : int (FK)
    -- user_id : int (FK)
    -- created_at : DATETIME | 생성 일시 
    -- support_credit : int | 후원 크레딧
    
    
    CREATE TABLE supports (
      support_id INT PRIMARY KEY AUTO_INCREMENT,
      project_id INT NOT NULL,
      user_id INT NOT NULL,
      created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      support_credit INT NOT NULL,
    
      FOREIGN KEY (project_id) REFERENCES projects(project_id),
      FOREIGN KEY (user_id) REFERENCES users(user_id)
    );
    ```


### ERD


ERD를 통해 전체적인 데이터 흐름을 시각화 각 엔티티 간의 관계가 명확하게 표현되어 있으며, 외래키 참조가 올바르게 설정되어 있음을 확인할 수 있다.


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQRJ7527%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T010312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICfy5WV8HuB51do15%2FQXms0iY%2FVtJFJqGad%2BtIUFJIu%2FAiA9QfqEPkVs5ppJ9mX2KwGemlBqdiYaHWNXqMlKkfXhzCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMcsfcpME%2BDGyKwYUeKtwDY2BFQ8Iou55FtU7qYvIZA%2FjT53xpOZD1PVmZLFafmPdRylv%2FEyPEqSgVxkQMA%2FYpI9O1fKKyv3qFXj724oR4DzCuXy2Z8775Vf%2FsQLgkajEAQ6XQPoXVoyVBBww2065NEaaOpgqok%2BeBjOvr%2FLGYkblWEW2ttUAI%2BYxa%2FC%2FHDk6rqpYG771b2L%2FwglB2aDOdhyYu6HaBLzZJgt7NpPj6qs%2F4Ei6vTsBOdiirtT2P%2F5CAucOjsF1eS5oDYY2yR6zZV8kpMy971Y7DQ6Eb0Dzrp9wAQFOCnS72bNWQ2EqtnjSB4hCtxrCvT%2BvqmydqETpL4ZFSy%2BwUii3%2Bf%2FMoS6Ow50MYBhYhWNPqKtwovKL2R2C0sXaS04Nb%2FRxl3Ay15Sce%2Buf08ipHLM5vw62YPxP3Txo7P01j5JpNzVRVF%2FsZ6W%2Bg%2FQZg1YQ6S%2Fza2U1DgXQaBRZqqhFJd404%2BMSPAMMd59FPSZO7dx6NxerFwsxVrYU1A9ICrS7seDX8PP3Bj6xexLBz4mmz4gdTHfkVgqa5%2Fpv30klu7yU6CnOae57HJ0nga%2BeVwneHvUrMsDzID%2FpM96u2UxdLEWwDYrMswn3625vmeomIW0ZUDWqPv3Rga6DAPXoLQZ1IFw6FRgcwq5SZyQY6pgFPaEG%2FKFSzBG1PLOXSh%2FRdLJxZyx567HDfwhQwTo85nc9bCrrplMPrqCVJTUukrKvlSeXnNTa6O7p1smGgqmaWblYnpo%2BXSa1Agn1BH7sIoL9T%2Fh5ZmrTVkGfHPEAvPkruEoaB%2FtAgWfEG0WRk6k1W6JlDO8O3xYHwbZPodBe9B7vQXP3BPM4AK9yibubdZxzxEU3faozLHKAkLRYZeHJBCE6crhg7&X-Amz-Signature=d56906dadeb54a0bb0e963ca7b72f8011fb62dfae839b7ea62ad563caf8b2834&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

