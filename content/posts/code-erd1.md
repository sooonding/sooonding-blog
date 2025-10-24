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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMRKPSHR%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T005700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9%2BwWYUSn4fTUXPHsrYd5Ec7iLPCstGV3RbabwPfzeJQIgekxTRwbUK5YPSnvQoZZbRwI3MeiOO7RehPe3xQQToOoq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDN6wTSRGfdK%2Fy%2BzG%2ByrcA5Zl1WXss3QZ69Uz676jXZpRAkVwZk6ABLPT5HOBPsLdekmHSqfN6NoGrbG5cj8DAaR4jIA40o%2BS28z6HxplpbyiZisQ2nreVD8REmFD71jaG7Xxlzwh4wkMHjvM6HWArUHjOD5QjknyNoI1BH7exYCqYRrlIUz83Sp9JCNS8aNrEYXa7UCgJWPFOKpqCaOIMyERGaAgzs%2BPuPu9paeJfea1VeWFjxQhaKgcLY4sjWt8qjvYINY0X8MCnU8xQ3prSYj0x%2BXRIKLgdVauAymJXhi5%2Bii0Xp0y6mEhDra93ZPSr3hWAWBu7dTU7BUIsaH%2FCHcGZI%2FQDahZdxFpfSE58pHaKjH9dQCMm0SMa%2BqoSWQmhUzF%2FyozVXzmJNXnOD5eoUfuMdgciNVXB1RKSOSUXmsivq2wD5N2Lds0PUXneEXiUsd2qoCfG3vvQ2POEG1Z5lbSFJ7RsPjxBytXQjYKozsFbCqAFX44Qs93NfBnutgXd0CDvL%2FuEH4JuXanK%2FaTOsYXHzNIx8XCRxExkfRDmYXVRJsSwNgrXQO61dQ3K61eUR%2FNOpcNv3as%2FEezOzN7MSpOXDaKMWxIcGBDZq9y1eD6XY8tEp0B%2FSbxqSPQhbJ8Mk8pFvp%2FcUp23jQEMJOK68cGOqUBHzC7DUYlQTQnCsHQKGhT9%2FkyxZqLkNqv8Peochz0EiiZgjtOxpJcyf8YcIbVBHcKAjLFQCc8ZS5s8yLWgeU9OQeO8BrXldxA0apOa5p6ft0m8UT17LHy5xPS2%2FsqARRPZoto1du4SmlUu54yjvUbY%2B5Gow4PVM3SlSg%2FrVXI8xjuWA4bu4PLvUWFiA%2BUfVrcTdc6bumEhU0LNmeXhSzVFyLwONut&X-Amz-Signature=82952aed8a7a7e8e1a3f42b68044a845ecce41f61a317c43f6432ed316de40f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSDLVUEQ%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T005701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH5gm6GkjWLW%2B%2BUaL8uek5bdEg7xj6xATfMCrI4EUSQ5AiEAhrGmgMwV4ERs7xJgfuu3JMXYgWINR79kKup1r1YRXZAq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDOzAK8HRtDBivlgs7CrcA9RMhO5fKn9k8fqCGRaF6kUnIskDbjW7MqNpKR51H2PMlBFf8%2FD%2BSoCto5ddF6k20qLHNnlJ%2Fw1QJgNLbx58er%2Bkmlal7DTg7S8G9sISnzUO4UCBsBWbQ9OJ37DJYYViidkfthQjj3on%2BD4DNUlyoaRGkZssZyVcLiqyt%2FNJOTFJ%2BJbXIRk96kh38q%2BPm%2BjZ9kU%2BXrRJ79XTOsVy7%2BulcnF7EE9YAsmuEVySrWyRqDFbaqi2uHKuarQrvVFTMoWeCUJwpLGb1lsnDCZgXFxSo%2FaRyDVxsegKDpg%2FzKlOwysQsx8RK0arvT5gCIzewqW5vzXMPZB5lnmVTGjseU%2F2D6BAQbBpkmLB%2F37tXwohk8CAz8EDHCuM796BJjEz31j0FpdWRoqTHpy7hQD764hRIiTf7Cw7EQDP74lNyDEMANyQ40gKtGpiEs5W8ZN3LWVm8oY8rTMZjHi48HWoIeqC0H7vYbQ2etpJJ%2F9KV%2BBC1UuE3qLqc09GpkwgXQ7%2BoDc5aVRxnJxL0EPYHwTyUrwuY4vY29DPM6dyLrFFZMQF%2BhLwCDEc1oo8Wq2nIxBAceoLrOmj7mm%2BQKPQ%2FnYYQVx6ioVsQ%2BIRevbvaeRDuGE8M415rDR7y3G4b7KONtlCMJOK68cGOqUBvIe0UDse1BHRDF5ngFBkjPf4o2wl4GBGA6v0BnmRLlHZfrVcraB3VXpaTTOlNBu6v5S2H8XtJoMoWnsSuPOWST5TmKYVGceXp61EsT2Maz3UwAfd%2FOTcF%2BOXTqLL61qycD7YjcUru9j5Ir1MS0aKK0I3dF%2FzUVwipyjE%2BEdy8xtvYtQ0rHF%2BTWBnA7u2xPgjVzDJngL%2FtrhbTUX4uyFRhfB7zuDU&X-Amz-Signature=0364fb823ef74679b5390e62dfc69700645855f32504754367fb4b3b6a9b0f52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSDLVUEQ%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T005701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH5gm6GkjWLW%2B%2BUaL8uek5bdEg7xj6xATfMCrI4EUSQ5AiEAhrGmgMwV4ERs7xJgfuu3JMXYgWINR79kKup1r1YRXZAq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDOzAK8HRtDBivlgs7CrcA9RMhO5fKn9k8fqCGRaF6kUnIskDbjW7MqNpKR51H2PMlBFf8%2FD%2BSoCto5ddF6k20qLHNnlJ%2Fw1QJgNLbx58er%2Bkmlal7DTg7S8G9sISnzUO4UCBsBWbQ9OJ37DJYYViidkfthQjj3on%2BD4DNUlyoaRGkZssZyVcLiqyt%2FNJOTFJ%2BJbXIRk96kh38q%2BPm%2BjZ9kU%2BXrRJ79XTOsVy7%2BulcnF7EE9YAsmuEVySrWyRqDFbaqi2uHKuarQrvVFTMoWeCUJwpLGb1lsnDCZgXFxSo%2FaRyDVxsegKDpg%2FzKlOwysQsx8RK0arvT5gCIzewqW5vzXMPZB5lnmVTGjseU%2F2D6BAQbBpkmLB%2F37tXwohk8CAz8EDHCuM796BJjEz31j0FpdWRoqTHpy7hQD764hRIiTf7Cw7EQDP74lNyDEMANyQ40gKtGpiEs5W8ZN3LWVm8oY8rTMZjHi48HWoIeqC0H7vYbQ2etpJJ%2F9KV%2BBC1UuE3qLqc09GpkwgXQ7%2BoDc5aVRxnJxL0EPYHwTyUrwuY4vY29DPM6dyLrFFZMQF%2BhLwCDEc1oo8Wq2nIxBAceoLrOmj7mm%2BQKPQ%2FnYYQVx6ioVsQ%2BIRevbvaeRDuGE8M415rDR7y3G4b7KONtlCMJOK68cGOqUBvIe0UDse1BHRDF5ngFBkjPf4o2wl4GBGA6v0BnmRLlHZfrVcraB3VXpaTTOlNBu6v5S2H8XtJoMoWnsSuPOWST5TmKYVGceXp61EsT2Maz3UwAfd%2FOTcF%2BOXTqLL61qycD7YjcUru9j5Ir1MS0aKK0I3dF%2FzUVwipyjE%2BEdy8xtvYtQ0rHF%2BTWBnA7u2xPgjVzDJngL%2FtrhbTUX4uyFRhfB7zuDU&X-Amz-Signature=17931b2ee36fbeb4ec852464b21bdad8e113e6295cdf4c91714e79070bc74cd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSDLVUEQ%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T005701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH5gm6GkjWLW%2B%2BUaL8uek5bdEg7xj6xATfMCrI4EUSQ5AiEAhrGmgMwV4ERs7xJgfuu3JMXYgWINR79kKup1r1YRXZAq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDOzAK8HRtDBivlgs7CrcA9RMhO5fKn9k8fqCGRaF6kUnIskDbjW7MqNpKR51H2PMlBFf8%2FD%2BSoCto5ddF6k20qLHNnlJ%2Fw1QJgNLbx58er%2Bkmlal7DTg7S8G9sISnzUO4UCBsBWbQ9OJ37DJYYViidkfthQjj3on%2BD4DNUlyoaRGkZssZyVcLiqyt%2FNJOTFJ%2BJbXIRk96kh38q%2BPm%2BjZ9kU%2BXrRJ79XTOsVy7%2BulcnF7EE9YAsmuEVySrWyRqDFbaqi2uHKuarQrvVFTMoWeCUJwpLGb1lsnDCZgXFxSo%2FaRyDVxsegKDpg%2FzKlOwysQsx8RK0arvT5gCIzewqW5vzXMPZB5lnmVTGjseU%2F2D6BAQbBpkmLB%2F37tXwohk8CAz8EDHCuM796BJjEz31j0FpdWRoqTHpy7hQD764hRIiTf7Cw7EQDP74lNyDEMANyQ40gKtGpiEs5W8ZN3LWVm8oY8rTMZjHi48HWoIeqC0H7vYbQ2etpJJ%2F9KV%2BBC1UuE3qLqc09GpkwgXQ7%2BoDc5aVRxnJxL0EPYHwTyUrwuY4vY29DPM6dyLrFFZMQF%2BhLwCDEc1oo8Wq2nIxBAceoLrOmj7mm%2BQKPQ%2FnYYQVx6ioVsQ%2BIRevbvaeRDuGE8M415rDR7y3G4b7KONtlCMJOK68cGOqUBvIe0UDse1BHRDF5ngFBkjPf4o2wl4GBGA6v0BnmRLlHZfrVcraB3VXpaTTOlNBu6v5S2H8XtJoMoWnsSuPOWST5TmKYVGceXp61EsT2Maz3UwAfd%2FOTcF%2BOXTqLL61qycD7YjcUru9j5Ir1MS0aKK0I3dF%2FzUVwipyjE%2BEdy8xtvYtQ0rHF%2BTWBnA7u2xPgjVzDJngL%2FtrhbTUX4uyFRhfB7zuDU&X-Amz-Signature=74e4329b7d73dd7729be64cbfd4220377146b9f1959bb5a57cb030d5094a665e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSDLVUEQ%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T005701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH5gm6GkjWLW%2B%2BUaL8uek5bdEg7xj6xATfMCrI4EUSQ5AiEAhrGmgMwV4ERs7xJgfuu3JMXYgWINR79kKup1r1YRXZAq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDOzAK8HRtDBivlgs7CrcA9RMhO5fKn9k8fqCGRaF6kUnIskDbjW7MqNpKR51H2PMlBFf8%2FD%2BSoCto5ddF6k20qLHNnlJ%2Fw1QJgNLbx58er%2Bkmlal7DTg7S8G9sISnzUO4UCBsBWbQ9OJ37DJYYViidkfthQjj3on%2BD4DNUlyoaRGkZssZyVcLiqyt%2FNJOTFJ%2BJbXIRk96kh38q%2BPm%2BjZ9kU%2BXrRJ79XTOsVy7%2BulcnF7EE9YAsmuEVySrWyRqDFbaqi2uHKuarQrvVFTMoWeCUJwpLGb1lsnDCZgXFxSo%2FaRyDVxsegKDpg%2FzKlOwysQsx8RK0arvT5gCIzewqW5vzXMPZB5lnmVTGjseU%2F2D6BAQbBpkmLB%2F37tXwohk8CAz8EDHCuM796BJjEz31j0FpdWRoqTHpy7hQD764hRIiTf7Cw7EQDP74lNyDEMANyQ40gKtGpiEs5W8ZN3LWVm8oY8rTMZjHi48HWoIeqC0H7vYbQ2etpJJ%2F9KV%2BBC1UuE3qLqc09GpkwgXQ7%2BoDc5aVRxnJxL0EPYHwTyUrwuY4vY29DPM6dyLrFFZMQF%2BhLwCDEc1oo8Wq2nIxBAceoLrOmj7mm%2BQKPQ%2FnYYQVx6ioVsQ%2BIRevbvaeRDuGE8M415rDR7y3G4b7KONtlCMJOK68cGOqUBvIe0UDse1BHRDF5ngFBkjPf4o2wl4GBGA6v0BnmRLlHZfrVcraB3VXpaTTOlNBu6v5S2H8XtJoMoWnsSuPOWST5TmKYVGceXp61EsT2Maz3UwAfd%2FOTcF%2BOXTqLL61qycD7YjcUru9j5Ir1MS0aKK0I3dF%2FzUVwipyjE%2BEdy8xtvYtQ0rHF%2BTWBnA7u2xPgjVzDJngL%2FtrhbTUX4uyFRhfB7zuDU&X-Amz-Signature=8a83117953310b31f86d5eab6827c8eab1601d40747d870a93d6be1d89fb83fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSDLVUEQ%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T005701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH5gm6GkjWLW%2B%2BUaL8uek5bdEg7xj6xATfMCrI4EUSQ5AiEAhrGmgMwV4ERs7xJgfuu3JMXYgWINR79kKup1r1YRXZAq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDOzAK8HRtDBivlgs7CrcA9RMhO5fKn9k8fqCGRaF6kUnIskDbjW7MqNpKR51H2PMlBFf8%2FD%2BSoCto5ddF6k20qLHNnlJ%2Fw1QJgNLbx58er%2Bkmlal7DTg7S8G9sISnzUO4UCBsBWbQ9OJ37DJYYViidkfthQjj3on%2BD4DNUlyoaRGkZssZyVcLiqyt%2FNJOTFJ%2BJbXIRk96kh38q%2BPm%2BjZ9kU%2BXrRJ79XTOsVy7%2BulcnF7EE9YAsmuEVySrWyRqDFbaqi2uHKuarQrvVFTMoWeCUJwpLGb1lsnDCZgXFxSo%2FaRyDVxsegKDpg%2FzKlOwysQsx8RK0arvT5gCIzewqW5vzXMPZB5lnmVTGjseU%2F2D6BAQbBpkmLB%2F37tXwohk8CAz8EDHCuM796BJjEz31j0FpdWRoqTHpy7hQD764hRIiTf7Cw7EQDP74lNyDEMANyQ40gKtGpiEs5W8ZN3LWVm8oY8rTMZjHi48HWoIeqC0H7vYbQ2etpJJ%2F9KV%2BBC1UuE3qLqc09GpkwgXQ7%2BoDc5aVRxnJxL0EPYHwTyUrwuY4vY29DPM6dyLrFFZMQF%2BhLwCDEc1oo8Wq2nIxBAceoLrOmj7mm%2BQKPQ%2FnYYQVx6ioVsQ%2BIRevbvaeRDuGE8M415rDR7y3G4b7KONtlCMJOK68cGOqUBvIe0UDse1BHRDF5ngFBkjPf4o2wl4GBGA6v0BnmRLlHZfrVcraB3VXpaTTOlNBu6v5S2H8XtJoMoWnsSuPOWST5TmKYVGceXp61EsT2Maz3UwAfd%2FOTcF%2BOXTqLL61qycD7YjcUru9j5Ir1MS0aKK0I3dF%2FzUVwipyjE%2BEdy8xtvYtQ0rHF%2BTWBnA7u2xPgjVzDJngL%2FtrhbTUX4uyFRhfB7zuDU&X-Amz-Signature=364d0179239569b1a59071b27ce7074afc151af2b5af1c39a47d8cfb12f392d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMRKPSHR%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T005700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9%2BwWYUSn4fTUXPHsrYd5Ec7iLPCstGV3RbabwPfzeJQIgekxTRwbUK5YPSnvQoZZbRwI3MeiOO7RehPe3xQQToOoq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDN6wTSRGfdK%2Fy%2BzG%2ByrcA5Zl1WXss3QZ69Uz676jXZpRAkVwZk6ABLPT5HOBPsLdekmHSqfN6NoGrbG5cj8DAaR4jIA40o%2BS28z6HxplpbyiZisQ2nreVD8REmFD71jaG7Xxlzwh4wkMHjvM6HWArUHjOD5QjknyNoI1BH7exYCqYRrlIUz83Sp9JCNS8aNrEYXa7UCgJWPFOKpqCaOIMyERGaAgzs%2BPuPu9paeJfea1VeWFjxQhaKgcLY4sjWt8qjvYINY0X8MCnU8xQ3prSYj0x%2BXRIKLgdVauAymJXhi5%2Bii0Xp0y6mEhDra93ZPSr3hWAWBu7dTU7BUIsaH%2FCHcGZI%2FQDahZdxFpfSE58pHaKjH9dQCMm0SMa%2BqoSWQmhUzF%2FyozVXzmJNXnOD5eoUfuMdgciNVXB1RKSOSUXmsivq2wD5N2Lds0PUXneEXiUsd2qoCfG3vvQ2POEG1Z5lbSFJ7RsPjxBytXQjYKozsFbCqAFX44Qs93NfBnutgXd0CDvL%2FuEH4JuXanK%2FaTOsYXHzNIx8XCRxExkfRDmYXVRJsSwNgrXQO61dQ3K61eUR%2FNOpcNv3as%2FEezOzN7MSpOXDaKMWxIcGBDZq9y1eD6XY8tEp0B%2FSbxqSPQhbJ8Mk8pFvp%2FcUp23jQEMJOK68cGOqUBHzC7DUYlQTQnCsHQKGhT9%2FkyxZqLkNqv8Peochz0EiiZgjtOxpJcyf8YcIbVBHcKAjLFQCc8ZS5s8yLWgeU9OQeO8BrXldxA0apOa5p6ft0m8UT17LHy5xPS2%2FsqARRPZoto1du4SmlUu54yjvUbY%2B5Gow4PVM3SlSg%2FrVXI8xjuWA4bu4PLvUWFiA%2BUfVrcTdc6bumEhU0LNmeXhSzVFyLwONut&X-Amz-Signature=bb0158db3b84e978f6f90d863f2e18a819c97da90e8fed3083013760e61c9e1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

