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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URXKH2CV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T010213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4sxoPJ7tIYZ052H7NmsGt6kheF7fdW4%2ByvHjrj9ktvQIgDEsP9PzATybwaXemyQNqigdya%2Bbs7n%2FNc0au9g0bjgIq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDHCQGE0TtD37MOBsoircAw7mOdF%2BJdD9qBndhHeCnVxvW5w0EmJwNY71SoCEawBaJjNSztBcS9FEJ2q4ipT4xtsR2ODauooFFk%2BWXyL202dpz16NKcXajcpMost56qt9pbo6kHP7XDtVbFb81B2hw%2Bc%2FFIOR1uN%2BQYFA1m0beqD52EqwvgVVD9nV4cQ9yu%2F%2FDCWQ5jsn1jp7SMmyRNI67J9KWAFipc11i7Qir8Y6qwUspgCbmAkeVIFLPSq9s3oa03eBDxCGB1%2Btr6nEmagtaO7fV95acOjKvQxK3WUBNKS0YGEjbjs6Y%2F5CnqRluQzJYZuDmpRUNrl%2BO3WZvCYk38FNMwF0csthnAjHqCJQzynTX96jCa48LFcjj8laoNM5rzeibufP0hZ2hAR24Nfd2jh0J%2FUsVSONZvTWZ4pX2gf9LyNGjV6Buuca4kM5ModDf066kpimJhVOXmk4n%2FqFUf53kYtXrWPnGjOqvb3gKPGLD7pEzDfsjVz%2BwMH0VYbKomV2ifHC%2FJ9hE0K5TxwExkgyg7jqUZkZZRgVXQXQ3zWAmOCcWbgjAddFXCqoPexGt3seueu7bDFhmqCZr%2FXfjgZkR6Jh277GbAYYpWw7ZLo%2BIBXOAU91Ur8cqDrNN464YzvuvHZFbIHrIiPKMMPqh8oGOqUBrLJ3WVFWTAHVg4rrUKGta4%2FzJQk0ChiYl6bvnlR54kUGaSVH4iEMCWlXfp1YNBIUickDfgoiGI85Ptx6z5DATTTAhMCEn7NH8li3E5MkdVLqEUKN9DfVpsLFiQ8akqIgY5I7LkhNUN5N9hFz2GRfye%2BUG72KEYPYDQ0bVrTYvFhvoie3LHzs5%2FUtvf8AqaYG1kErjPwQ6RWLHap5mbkmk2T8KaHc&X-Amz-Signature=56dbe86059b43f7653701b0dc2940caac33825d38044d4b58249e9d0a5482e46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOW3H5SZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T010216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtGCCV4yBygfwhpK%2FZsSix4XJZ8ia7lD6pWjuPr2ueEAIhAN66MuTnAFUSMQh%2FT7oFSRfZrk4MnxeirKCJeBGOdIAtKv8DCHEQABoMNjM3NDIzMTgzODA1Igwf0abhPGRw8%2FCewlkq3AOxJ4eFHspdzwxINkS%2FKrXSBEUfCdmdLtn2b1nWdfLoh1NqWVb73eMpIVu3TkbkbGVkQOciQ9%2B1JbRIhlUoXJLF714G2vfo1CvUZo5n%2BBniV7pjcOQe%2BkASmWi4EW42ckpFgvZU7OfHSSrmMpR%2B4C4z%2Bs2wVz3Xf6AUyivJaHp2VZuIVAiAKDFwibJn795Dd2AYiRj4%2BsVMWap0t0sIpv%2BGudK2p4VslhJ4CcN502wF8ijv74QMrepspiy80msqlK2bJG2WlnD0NU%2FO61864EkKLbfRQxKLMG1xacUChG22%2F4JHRvyWWG4ykTs3CN9V9U5TJmk5QLQciF62yaYsZnVIJYHOqqRFKyO%2FFVIUAT%2BI2o8SxX1dSaMBrjwwX6c%2BFlkNsNglFGk1wzD0%2BA3QpNb6i82RZlj9UoTvViCeCdM%2FpwkiIif3ZuSgTTQTw%2FHc6mB4Etg3D1QJwdGkkbc3XY2yUueQTLkpaGARJMFsvs1HOqk0AeawN7pL4PExy5rqO8f4lBYFtwtl4rlUaWbSZEHxLaoAMH6%2FZZUyb4gcfMLl2lbVkh3gQWAVhZvxdI1wJ6uBzo2tHwuLAGTp2N%2F7v11qTLh%2F8w%2B16gJrQ7CmKf5NrKh6%2BjCZfVMXUcXSHjCw6ofKBjqkAX5pUYXFw%2Bpdndialmz7brs7gRP4kygFZUTVdnrHpXUpl545BQ7gFi6trL3QmeW80AP8%2FF0VdlXd5ehwUYLGDTvy6CQDETtOOPXohui5o5bVZNJk7uVk4O5UZtpfXJ2SXfj7BwEqUybWF%2BWUorRmrZGXqO%2BeP%2FgTBkAbe%2BNhKSOBbSe2jib8Wzr0MLX8CkN2nraPtimrqfUK5bucpl24UzO9sKJy&X-Amz-Signature=851a249c54d6aab8334e853f4964d08708cb953a0257aa716487256aa649a1a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOW3H5SZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T010216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtGCCV4yBygfwhpK%2FZsSix4XJZ8ia7lD6pWjuPr2ueEAIhAN66MuTnAFUSMQh%2FT7oFSRfZrk4MnxeirKCJeBGOdIAtKv8DCHEQABoMNjM3NDIzMTgzODA1Igwf0abhPGRw8%2FCewlkq3AOxJ4eFHspdzwxINkS%2FKrXSBEUfCdmdLtn2b1nWdfLoh1NqWVb73eMpIVu3TkbkbGVkQOciQ9%2B1JbRIhlUoXJLF714G2vfo1CvUZo5n%2BBniV7pjcOQe%2BkASmWi4EW42ckpFgvZU7OfHSSrmMpR%2B4C4z%2Bs2wVz3Xf6AUyivJaHp2VZuIVAiAKDFwibJn795Dd2AYiRj4%2BsVMWap0t0sIpv%2BGudK2p4VslhJ4CcN502wF8ijv74QMrepspiy80msqlK2bJG2WlnD0NU%2FO61864EkKLbfRQxKLMG1xacUChG22%2F4JHRvyWWG4ykTs3CN9V9U5TJmk5QLQciF62yaYsZnVIJYHOqqRFKyO%2FFVIUAT%2BI2o8SxX1dSaMBrjwwX6c%2BFlkNsNglFGk1wzD0%2BA3QpNb6i82RZlj9UoTvViCeCdM%2FpwkiIif3ZuSgTTQTw%2FHc6mB4Etg3D1QJwdGkkbc3XY2yUueQTLkpaGARJMFsvs1HOqk0AeawN7pL4PExy5rqO8f4lBYFtwtl4rlUaWbSZEHxLaoAMH6%2FZZUyb4gcfMLl2lbVkh3gQWAVhZvxdI1wJ6uBzo2tHwuLAGTp2N%2F7v11qTLh%2F8w%2B16gJrQ7CmKf5NrKh6%2BjCZfVMXUcXSHjCw6ofKBjqkAX5pUYXFw%2Bpdndialmz7brs7gRP4kygFZUTVdnrHpXUpl545BQ7gFi6trL3QmeW80AP8%2FF0VdlXd5ehwUYLGDTvy6CQDETtOOPXohui5o5bVZNJk7uVk4O5UZtpfXJ2SXfj7BwEqUybWF%2BWUorRmrZGXqO%2BeP%2FgTBkAbe%2BNhKSOBbSe2jib8Wzr0MLX8CkN2nraPtimrqfUK5bucpl24UzO9sKJy&X-Amz-Signature=197facf2ad6aa602578b46a81c9354bfd8f5f8024cc1274776d7238393d18bac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOW3H5SZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T010216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtGCCV4yBygfwhpK%2FZsSix4XJZ8ia7lD6pWjuPr2ueEAIhAN66MuTnAFUSMQh%2FT7oFSRfZrk4MnxeirKCJeBGOdIAtKv8DCHEQABoMNjM3NDIzMTgzODA1Igwf0abhPGRw8%2FCewlkq3AOxJ4eFHspdzwxINkS%2FKrXSBEUfCdmdLtn2b1nWdfLoh1NqWVb73eMpIVu3TkbkbGVkQOciQ9%2B1JbRIhlUoXJLF714G2vfo1CvUZo5n%2BBniV7pjcOQe%2BkASmWi4EW42ckpFgvZU7OfHSSrmMpR%2B4C4z%2Bs2wVz3Xf6AUyivJaHp2VZuIVAiAKDFwibJn795Dd2AYiRj4%2BsVMWap0t0sIpv%2BGudK2p4VslhJ4CcN502wF8ijv74QMrepspiy80msqlK2bJG2WlnD0NU%2FO61864EkKLbfRQxKLMG1xacUChG22%2F4JHRvyWWG4ykTs3CN9V9U5TJmk5QLQciF62yaYsZnVIJYHOqqRFKyO%2FFVIUAT%2BI2o8SxX1dSaMBrjwwX6c%2BFlkNsNglFGk1wzD0%2BA3QpNb6i82RZlj9UoTvViCeCdM%2FpwkiIif3ZuSgTTQTw%2FHc6mB4Etg3D1QJwdGkkbc3XY2yUueQTLkpaGARJMFsvs1HOqk0AeawN7pL4PExy5rqO8f4lBYFtwtl4rlUaWbSZEHxLaoAMH6%2FZZUyb4gcfMLl2lbVkh3gQWAVhZvxdI1wJ6uBzo2tHwuLAGTp2N%2F7v11qTLh%2F8w%2B16gJrQ7CmKf5NrKh6%2BjCZfVMXUcXSHjCw6ofKBjqkAX5pUYXFw%2Bpdndialmz7brs7gRP4kygFZUTVdnrHpXUpl545BQ7gFi6trL3QmeW80AP8%2FF0VdlXd5ehwUYLGDTvy6CQDETtOOPXohui5o5bVZNJk7uVk4O5UZtpfXJ2SXfj7BwEqUybWF%2BWUorRmrZGXqO%2BeP%2FgTBkAbe%2BNhKSOBbSe2jib8Wzr0MLX8CkN2nraPtimrqfUK5bucpl24UzO9sKJy&X-Amz-Signature=08ac478d46011a2407b17cd72712c59bd9792fdc3a6db8aea484cdac64967e36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOW3H5SZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T010216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtGCCV4yBygfwhpK%2FZsSix4XJZ8ia7lD6pWjuPr2ueEAIhAN66MuTnAFUSMQh%2FT7oFSRfZrk4MnxeirKCJeBGOdIAtKv8DCHEQABoMNjM3NDIzMTgzODA1Igwf0abhPGRw8%2FCewlkq3AOxJ4eFHspdzwxINkS%2FKrXSBEUfCdmdLtn2b1nWdfLoh1NqWVb73eMpIVu3TkbkbGVkQOciQ9%2B1JbRIhlUoXJLF714G2vfo1CvUZo5n%2BBniV7pjcOQe%2BkASmWi4EW42ckpFgvZU7OfHSSrmMpR%2B4C4z%2Bs2wVz3Xf6AUyivJaHp2VZuIVAiAKDFwibJn795Dd2AYiRj4%2BsVMWap0t0sIpv%2BGudK2p4VslhJ4CcN502wF8ijv74QMrepspiy80msqlK2bJG2WlnD0NU%2FO61864EkKLbfRQxKLMG1xacUChG22%2F4JHRvyWWG4ykTs3CN9V9U5TJmk5QLQciF62yaYsZnVIJYHOqqRFKyO%2FFVIUAT%2BI2o8SxX1dSaMBrjwwX6c%2BFlkNsNglFGk1wzD0%2BA3QpNb6i82RZlj9UoTvViCeCdM%2FpwkiIif3ZuSgTTQTw%2FHc6mB4Etg3D1QJwdGkkbc3XY2yUueQTLkpaGARJMFsvs1HOqk0AeawN7pL4PExy5rqO8f4lBYFtwtl4rlUaWbSZEHxLaoAMH6%2FZZUyb4gcfMLl2lbVkh3gQWAVhZvxdI1wJ6uBzo2tHwuLAGTp2N%2F7v11qTLh%2F8w%2B16gJrQ7CmKf5NrKh6%2BjCZfVMXUcXSHjCw6ofKBjqkAX5pUYXFw%2Bpdndialmz7brs7gRP4kygFZUTVdnrHpXUpl545BQ7gFi6trL3QmeW80AP8%2FF0VdlXd5ehwUYLGDTvy6CQDETtOOPXohui5o5bVZNJk7uVk4O5UZtpfXJ2SXfj7BwEqUybWF%2BWUorRmrZGXqO%2BeP%2FgTBkAbe%2BNhKSOBbSe2jib8Wzr0MLX8CkN2nraPtimrqfUK5bucpl24UzO9sKJy&X-Amz-Signature=fa3ea1e718f5f540695868b602be8ad6c954acbbea55a0f596d93b57bd801f05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOW3H5SZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T010216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtGCCV4yBygfwhpK%2FZsSix4XJZ8ia7lD6pWjuPr2ueEAIhAN66MuTnAFUSMQh%2FT7oFSRfZrk4MnxeirKCJeBGOdIAtKv8DCHEQABoMNjM3NDIzMTgzODA1Igwf0abhPGRw8%2FCewlkq3AOxJ4eFHspdzwxINkS%2FKrXSBEUfCdmdLtn2b1nWdfLoh1NqWVb73eMpIVu3TkbkbGVkQOciQ9%2B1JbRIhlUoXJLF714G2vfo1CvUZo5n%2BBniV7pjcOQe%2BkASmWi4EW42ckpFgvZU7OfHSSrmMpR%2B4C4z%2Bs2wVz3Xf6AUyivJaHp2VZuIVAiAKDFwibJn795Dd2AYiRj4%2BsVMWap0t0sIpv%2BGudK2p4VslhJ4CcN502wF8ijv74QMrepspiy80msqlK2bJG2WlnD0NU%2FO61864EkKLbfRQxKLMG1xacUChG22%2F4JHRvyWWG4ykTs3CN9V9U5TJmk5QLQciF62yaYsZnVIJYHOqqRFKyO%2FFVIUAT%2BI2o8SxX1dSaMBrjwwX6c%2BFlkNsNglFGk1wzD0%2BA3QpNb6i82RZlj9UoTvViCeCdM%2FpwkiIif3ZuSgTTQTw%2FHc6mB4Etg3D1QJwdGkkbc3XY2yUueQTLkpaGARJMFsvs1HOqk0AeawN7pL4PExy5rqO8f4lBYFtwtl4rlUaWbSZEHxLaoAMH6%2FZZUyb4gcfMLl2lbVkh3gQWAVhZvxdI1wJ6uBzo2tHwuLAGTp2N%2F7v11qTLh%2F8w%2B16gJrQ7CmKf5NrKh6%2BjCZfVMXUcXSHjCw6ofKBjqkAX5pUYXFw%2Bpdndialmz7brs7gRP4kygFZUTVdnrHpXUpl545BQ7gFi6trL3QmeW80AP8%2FF0VdlXd5ehwUYLGDTvy6CQDETtOOPXohui5o5bVZNJk7uVk4O5UZtpfXJ2SXfj7BwEqUybWF%2BWUorRmrZGXqO%2BeP%2FgTBkAbe%2BNhKSOBbSe2jib8Wzr0MLX8CkN2nraPtimrqfUK5bucpl24UzO9sKJy&X-Amz-Signature=2d744606acf64409e45554e73217030f821673625711bd4d196c906dec74c555&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URXKH2CV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T010213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4sxoPJ7tIYZ052H7NmsGt6kheF7fdW4%2ByvHjrj9ktvQIgDEsP9PzATybwaXemyQNqigdya%2Bbs7n%2FNc0au9g0bjgIq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDHCQGE0TtD37MOBsoircAw7mOdF%2BJdD9qBndhHeCnVxvW5w0EmJwNY71SoCEawBaJjNSztBcS9FEJ2q4ipT4xtsR2ODauooFFk%2BWXyL202dpz16NKcXajcpMost56qt9pbo6kHP7XDtVbFb81B2hw%2Bc%2FFIOR1uN%2BQYFA1m0beqD52EqwvgVVD9nV4cQ9yu%2F%2FDCWQ5jsn1jp7SMmyRNI67J9KWAFipc11i7Qir8Y6qwUspgCbmAkeVIFLPSq9s3oa03eBDxCGB1%2Btr6nEmagtaO7fV95acOjKvQxK3WUBNKS0YGEjbjs6Y%2F5CnqRluQzJYZuDmpRUNrl%2BO3WZvCYk38FNMwF0csthnAjHqCJQzynTX96jCa48LFcjj8laoNM5rzeibufP0hZ2hAR24Nfd2jh0J%2FUsVSONZvTWZ4pX2gf9LyNGjV6Buuca4kM5ModDf066kpimJhVOXmk4n%2FqFUf53kYtXrWPnGjOqvb3gKPGLD7pEzDfsjVz%2BwMH0VYbKomV2ifHC%2FJ9hE0K5TxwExkgyg7jqUZkZZRgVXQXQ3zWAmOCcWbgjAddFXCqoPexGt3seueu7bDFhmqCZr%2FXfjgZkR6Jh277GbAYYpWw7ZLo%2BIBXOAU91Ur8cqDrNN464YzvuvHZFbIHrIiPKMMPqh8oGOqUBrLJ3WVFWTAHVg4rrUKGta4%2FzJQk0ChiYl6bvnlR54kUGaSVH4iEMCWlXfp1YNBIUickDfgoiGI85Ptx6z5DATTTAhMCEn7NH8li3E5MkdVLqEUKN9DfVpsLFiQ8akqIgY5I7LkhNUN5N9hFz2GRfye%2BUG72KEYPYDQ0bVrTYvFhvoie3LHzs5%2FUtvf8AqaYG1kErjPwQ6RWLHap5mbkmk2T8KaHc&X-Amz-Signature=a3295e533d9b47abeeafe9420bff2b05332ff68a455a293d93d1f37b1a50e857&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

