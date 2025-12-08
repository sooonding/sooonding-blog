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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW67HIZR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T010506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6fML5mpNoAaw3kmU2%2BFooN4usB4re%2FGmW5xkwz2O3vwIhAJ7Oia9iAc9t1cbN6P%2F4mAGMyu8ugTwsL1UtlWsl6%2BEVKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4lVAg1YgNDa%2Brm1oq3ANdwqxxGxZpb%2BrwP4ViJixC%2BX%2F%2Fui6CED6hyOV4E8ndZQYzplCkT%2Be%2B955nz5ro7imOrX1Btp1R%2BhlrybDEDmfQ580qW8t9JHf2LDEI3L%2B0U3QbZPoyi3MtXuI3HpPGW5ZkM1eqwrjbYSlmssdHED1IcGGpcCFqq3EMuMj5cbtlOnpPZNup4dXE9Kx3sOsIa3A19kJmPEsbJdUc5ZWiU1T7VZrhpP%2BwpcrzAU0I0v9k9hKDV61gg45kkkW7gP%2BEK2yP3SRiRnHFwHh7fS2UcSYL6Rcx26fMRol69%2Bu419DD35A2npChmTixTvsQi%2BasGyWpLAgelHY41Tdcke4hM0L%2BQOX53qaX%2BXkFkoIgGCft9PTsI2DYVDOeglic%2Fy1uEoNkNeIveCMVh%2FTBuEm0i2xKXyLNWVviVwVb2JPiwrNdFfG%2BcggvDb35DGoTcc5uUw6g46NPYtUHmq6S%2FbInW2SFSrCtCux9TDKlDU157gUOqrHuUMF7wZEYUwlnCZqDvCMFGnEwUe%2FowGs%2F%2F6Ndf7QGIeJgNYRlKPdURMPA%2BGR9wTy%2B6EMWYsBFpMeOmjz3%2B%2FPPGvpESReFqNuMxjDiGh1j8smIZURTBk8EB6Zuxqh%2F0qqWcMr485MiIdr%2B%2FzCJwtjJBjqkAVNsjEt7N4im3n3FetTT8bctEcPd6sl2aDVg2xAuAXG544nJRN95BIh3f6MkJ%2FWgG3ivtUdha04dDFl6hEIch8%2FmHHJyZTh%2Fzxt2vvGzP3UU3aHkNMBeAlsDEscskeb4GcXdB9bAgpXrY5002FiJJVmqpfXUCZUzrLVePWRGEZPx4mRIPOYs8YBDXIfjWzQwKsjm51cV2DDz6O2qOY23SVcEM3hZ&X-Amz-Signature=525971e933a718731aaac81cc4b47875ac447b4eaafa94e8c1bbebb70cc7995d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TER2LZU5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T010507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC64OcvPxxMUZ7OQcRT%2Fxd7tp6uMDViSGF8Zjxx0y3uBwIgTTYMs14DEYRs4YR7zLb0afkMZIJ9BjqUxzyJcFRrEDYqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDEMAyuM4ft%2FBSC4wCrcAw%2BOatHg0MfXrV6LbXE6i%2FQzK3kcuL4N7rYCcM046I7NvQak2KwxYWrF%2BO0Yw%2BV9w0eTuEsqKjdfZGTKvrhZBc3MCOma1yZpihEzUfPVKQLjZpdtBrRdg1BwSj5RV5P6J0wyaC72Xl06A1rfdbZr8KNztD6jhDXcb0qyCKLyKumCoo8Scz7T3BTBnjWRxOkA2oH3i2Bi90iKzVfxI3gst2XvNtiqPMl04cVxFajRm7zvhXfdA4rz1Cv%2F%2Fph9g8rcM68GAfk92eak%2BKLUpY0VnYxS7VUhTxSUmFEnQAi7%2Fv6er8lXsvAAGGF1APCMn39vbFKoimuwK2RCWtKXOU%2FFRge13OFArCKHEOMhocIVvTGgCxkM3ZiXhG8i3AHMeOVNHYfEn2csnxfl3lFNJaz2WuyWSNetACNHcM8O5BvBdGQ24jMlCggCAFbIVP788vdbJm1kXE6SNv2gwE6QK%2FednfU3E1XHInkeMo89tNET7P0nLKgEDzyOtrZg9%2FCHVEzCfKTKEgiDQtw71vWlUbaXk%2FxTwxBZ8kt0ev4s4ccP39c6dorY8BINwTRfnqDjvVX%2Fcjl%2Bv5LVRZp4iDWIqLJLlWrx8vtNZXZUCvwN8NHNXdSPyZBCZhdtazblylLwMILC2MkGOqUBx%2F2sVkWPE%2BwM5IWX8em9UHd0SDXzTQvKAAw6%2B3jvHVaU4dJyj66cw435e0aPOZafnOEAqG%2BmoXIgsfsVRG5fdBdg1gbFIO2bruqzllBsTZAF1QVv3%2BVu6YxnHtWYlBAz0yqTrYmff7HFlL466Gv8bgJ%2Ffow6sicjVsmtcpKuCrftEQVaoW4%2BHlG8pJrIocrTQrk0wS7xuqL%2BXNkQ1XvIesT3qp0m&X-Amz-Signature=ed3c5e52407fc6cc1167b10a0bad4fe2f949ec0851deeb0deed6f6466c33663a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TER2LZU5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T010507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC64OcvPxxMUZ7OQcRT%2Fxd7tp6uMDViSGF8Zjxx0y3uBwIgTTYMs14DEYRs4YR7zLb0afkMZIJ9BjqUxzyJcFRrEDYqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDEMAyuM4ft%2FBSC4wCrcAw%2BOatHg0MfXrV6LbXE6i%2FQzK3kcuL4N7rYCcM046I7NvQak2KwxYWrF%2BO0Yw%2BV9w0eTuEsqKjdfZGTKvrhZBc3MCOma1yZpihEzUfPVKQLjZpdtBrRdg1BwSj5RV5P6J0wyaC72Xl06A1rfdbZr8KNztD6jhDXcb0qyCKLyKumCoo8Scz7T3BTBnjWRxOkA2oH3i2Bi90iKzVfxI3gst2XvNtiqPMl04cVxFajRm7zvhXfdA4rz1Cv%2F%2Fph9g8rcM68GAfk92eak%2BKLUpY0VnYxS7VUhTxSUmFEnQAi7%2Fv6er8lXsvAAGGF1APCMn39vbFKoimuwK2RCWtKXOU%2FFRge13OFArCKHEOMhocIVvTGgCxkM3ZiXhG8i3AHMeOVNHYfEn2csnxfl3lFNJaz2WuyWSNetACNHcM8O5BvBdGQ24jMlCggCAFbIVP788vdbJm1kXE6SNv2gwE6QK%2FednfU3E1XHInkeMo89tNET7P0nLKgEDzyOtrZg9%2FCHVEzCfKTKEgiDQtw71vWlUbaXk%2FxTwxBZ8kt0ev4s4ccP39c6dorY8BINwTRfnqDjvVX%2Fcjl%2Bv5LVRZp4iDWIqLJLlWrx8vtNZXZUCvwN8NHNXdSPyZBCZhdtazblylLwMILC2MkGOqUBx%2F2sVkWPE%2BwM5IWX8em9UHd0SDXzTQvKAAw6%2B3jvHVaU4dJyj66cw435e0aPOZafnOEAqG%2BmoXIgsfsVRG5fdBdg1gbFIO2bruqzllBsTZAF1QVv3%2BVu6YxnHtWYlBAz0yqTrYmff7HFlL466Gv8bgJ%2Ffow6sicjVsmtcpKuCrftEQVaoW4%2BHlG8pJrIocrTQrk0wS7xuqL%2BXNkQ1XvIesT3qp0m&X-Amz-Signature=48fc141aa67aa378c3fe9d9a04616f586dc4c790c2065df00b87edf49a5e4a41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TER2LZU5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T010507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC64OcvPxxMUZ7OQcRT%2Fxd7tp6uMDViSGF8Zjxx0y3uBwIgTTYMs14DEYRs4YR7zLb0afkMZIJ9BjqUxzyJcFRrEDYqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDEMAyuM4ft%2FBSC4wCrcAw%2BOatHg0MfXrV6LbXE6i%2FQzK3kcuL4N7rYCcM046I7NvQak2KwxYWrF%2BO0Yw%2BV9w0eTuEsqKjdfZGTKvrhZBc3MCOma1yZpihEzUfPVKQLjZpdtBrRdg1BwSj5RV5P6J0wyaC72Xl06A1rfdbZr8KNztD6jhDXcb0qyCKLyKumCoo8Scz7T3BTBnjWRxOkA2oH3i2Bi90iKzVfxI3gst2XvNtiqPMl04cVxFajRm7zvhXfdA4rz1Cv%2F%2Fph9g8rcM68GAfk92eak%2BKLUpY0VnYxS7VUhTxSUmFEnQAi7%2Fv6er8lXsvAAGGF1APCMn39vbFKoimuwK2RCWtKXOU%2FFRge13OFArCKHEOMhocIVvTGgCxkM3ZiXhG8i3AHMeOVNHYfEn2csnxfl3lFNJaz2WuyWSNetACNHcM8O5BvBdGQ24jMlCggCAFbIVP788vdbJm1kXE6SNv2gwE6QK%2FednfU3E1XHInkeMo89tNET7P0nLKgEDzyOtrZg9%2FCHVEzCfKTKEgiDQtw71vWlUbaXk%2FxTwxBZ8kt0ev4s4ccP39c6dorY8BINwTRfnqDjvVX%2Fcjl%2Bv5LVRZp4iDWIqLJLlWrx8vtNZXZUCvwN8NHNXdSPyZBCZhdtazblylLwMILC2MkGOqUBx%2F2sVkWPE%2BwM5IWX8em9UHd0SDXzTQvKAAw6%2B3jvHVaU4dJyj66cw435e0aPOZafnOEAqG%2BmoXIgsfsVRG5fdBdg1gbFIO2bruqzllBsTZAF1QVv3%2BVu6YxnHtWYlBAz0yqTrYmff7HFlL466Gv8bgJ%2Ffow6sicjVsmtcpKuCrftEQVaoW4%2BHlG8pJrIocrTQrk0wS7xuqL%2BXNkQ1XvIesT3qp0m&X-Amz-Signature=81b60032d339532efe23f1002f2bcac74db7c25206f17d4e30622fc41705f424&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TER2LZU5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T010507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC64OcvPxxMUZ7OQcRT%2Fxd7tp6uMDViSGF8Zjxx0y3uBwIgTTYMs14DEYRs4YR7zLb0afkMZIJ9BjqUxzyJcFRrEDYqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDEMAyuM4ft%2FBSC4wCrcAw%2BOatHg0MfXrV6LbXE6i%2FQzK3kcuL4N7rYCcM046I7NvQak2KwxYWrF%2BO0Yw%2BV9w0eTuEsqKjdfZGTKvrhZBc3MCOma1yZpihEzUfPVKQLjZpdtBrRdg1BwSj5RV5P6J0wyaC72Xl06A1rfdbZr8KNztD6jhDXcb0qyCKLyKumCoo8Scz7T3BTBnjWRxOkA2oH3i2Bi90iKzVfxI3gst2XvNtiqPMl04cVxFajRm7zvhXfdA4rz1Cv%2F%2Fph9g8rcM68GAfk92eak%2BKLUpY0VnYxS7VUhTxSUmFEnQAi7%2Fv6er8lXsvAAGGF1APCMn39vbFKoimuwK2RCWtKXOU%2FFRge13OFArCKHEOMhocIVvTGgCxkM3ZiXhG8i3AHMeOVNHYfEn2csnxfl3lFNJaz2WuyWSNetACNHcM8O5BvBdGQ24jMlCggCAFbIVP788vdbJm1kXE6SNv2gwE6QK%2FednfU3E1XHInkeMo89tNET7P0nLKgEDzyOtrZg9%2FCHVEzCfKTKEgiDQtw71vWlUbaXk%2FxTwxBZ8kt0ev4s4ccP39c6dorY8BINwTRfnqDjvVX%2Fcjl%2Bv5LVRZp4iDWIqLJLlWrx8vtNZXZUCvwN8NHNXdSPyZBCZhdtazblylLwMILC2MkGOqUBx%2F2sVkWPE%2BwM5IWX8em9UHd0SDXzTQvKAAw6%2B3jvHVaU4dJyj66cw435e0aPOZafnOEAqG%2BmoXIgsfsVRG5fdBdg1gbFIO2bruqzllBsTZAF1QVv3%2BVu6YxnHtWYlBAz0yqTrYmff7HFlL466Gv8bgJ%2Ffow6sicjVsmtcpKuCrftEQVaoW4%2BHlG8pJrIocrTQrk0wS7xuqL%2BXNkQ1XvIesT3qp0m&X-Amz-Signature=db8d55561a0d2e869a476d51b5d9cfe26f1f0ac16847e02a064566788b75ce5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TER2LZU5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T010507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC64OcvPxxMUZ7OQcRT%2Fxd7tp6uMDViSGF8Zjxx0y3uBwIgTTYMs14DEYRs4YR7zLb0afkMZIJ9BjqUxzyJcFRrEDYqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDEMAyuM4ft%2FBSC4wCrcAw%2BOatHg0MfXrV6LbXE6i%2FQzK3kcuL4N7rYCcM046I7NvQak2KwxYWrF%2BO0Yw%2BV9w0eTuEsqKjdfZGTKvrhZBc3MCOma1yZpihEzUfPVKQLjZpdtBrRdg1BwSj5RV5P6J0wyaC72Xl06A1rfdbZr8KNztD6jhDXcb0qyCKLyKumCoo8Scz7T3BTBnjWRxOkA2oH3i2Bi90iKzVfxI3gst2XvNtiqPMl04cVxFajRm7zvhXfdA4rz1Cv%2F%2Fph9g8rcM68GAfk92eak%2BKLUpY0VnYxS7VUhTxSUmFEnQAi7%2Fv6er8lXsvAAGGF1APCMn39vbFKoimuwK2RCWtKXOU%2FFRge13OFArCKHEOMhocIVvTGgCxkM3ZiXhG8i3AHMeOVNHYfEn2csnxfl3lFNJaz2WuyWSNetACNHcM8O5BvBdGQ24jMlCggCAFbIVP788vdbJm1kXE6SNv2gwE6QK%2FednfU3E1XHInkeMo89tNET7P0nLKgEDzyOtrZg9%2FCHVEzCfKTKEgiDQtw71vWlUbaXk%2FxTwxBZ8kt0ev4s4ccP39c6dorY8BINwTRfnqDjvVX%2Fcjl%2Bv5LVRZp4iDWIqLJLlWrx8vtNZXZUCvwN8NHNXdSPyZBCZhdtazblylLwMILC2MkGOqUBx%2F2sVkWPE%2BwM5IWX8em9UHd0SDXzTQvKAAw6%2B3jvHVaU4dJyj66cw435e0aPOZafnOEAqG%2BmoXIgsfsVRG5fdBdg1gbFIO2bruqzllBsTZAF1QVv3%2BVu6YxnHtWYlBAz0yqTrYmff7HFlL466Gv8bgJ%2Ffow6sicjVsmtcpKuCrftEQVaoW4%2BHlG8pJrIocrTQrk0wS7xuqL%2BXNkQ1XvIesT3qp0m&X-Amz-Signature=0af5aea9f9c2fc43b25664131b2f4dc1ef863e477dc60fc26200300cf76a040a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW67HIZR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T010506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6fML5mpNoAaw3kmU2%2BFooN4usB4re%2FGmW5xkwz2O3vwIhAJ7Oia9iAc9t1cbN6P%2F4mAGMyu8ugTwsL1UtlWsl6%2BEVKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4lVAg1YgNDa%2Brm1oq3ANdwqxxGxZpb%2BrwP4ViJixC%2BX%2F%2Fui6CED6hyOV4E8ndZQYzplCkT%2Be%2B955nz5ro7imOrX1Btp1R%2BhlrybDEDmfQ580qW8t9JHf2LDEI3L%2B0U3QbZPoyi3MtXuI3HpPGW5ZkM1eqwrjbYSlmssdHED1IcGGpcCFqq3EMuMj5cbtlOnpPZNup4dXE9Kx3sOsIa3A19kJmPEsbJdUc5ZWiU1T7VZrhpP%2BwpcrzAU0I0v9k9hKDV61gg45kkkW7gP%2BEK2yP3SRiRnHFwHh7fS2UcSYL6Rcx26fMRol69%2Bu419DD35A2npChmTixTvsQi%2BasGyWpLAgelHY41Tdcke4hM0L%2BQOX53qaX%2BXkFkoIgGCft9PTsI2DYVDOeglic%2Fy1uEoNkNeIveCMVh%2FTBuEm0i2xKXyLNWVviVwVb2JPiwrNdFfG%2BcggvDb35DGoTcc5uUw6g46NPYtUHmq6S%2FbInW2SFSrCtCux9TDKlDU157gUOqrHuUMF7wZEYUwlnCZqDvCMFGnEwUe%2FowGs%2F%2F6Ndf7QGIeJgNYRlKPdURMPA%2BGR9wTy%2B6EMWYsBFpMeOmjz3%2B%2FPPGvpESReFqNuMxjDiGh1j8smIZURTBk8EB6Zuxqh%2F0qqWcMr485MiIdr%2B%2FzCJwtjJBjqkAVNsjEt7N4im3n3FetTT8bctEcPd6sl2aDVg2xAuAXG544nJRN95BIh3f6MkJ%2FWgG3ivtUdha04dDFl6hEIch8%2FmHHJyZTh%2Fzxt2vvGzP3UU3aHkNMBeAlsDEscskeb4GcXdB9bAgpXrY5002FiJJVmqpfXUCZUzrLVePWRGEZPx4mRIPOYs8YBDXIfjWzQwKsjm51cV2DDz6O2qOY23SVcEM3hZ&X-Amz-Signature=690bc9a482a92176520dc8db73d6005956bb329aa69cb7403eee1e68298cf7b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

