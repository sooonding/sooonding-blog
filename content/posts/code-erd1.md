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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLP6KUDM%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T010647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGz8BtTJ%2Fny1Y688ueJb0EnjDgRMmIQvP4hjtOMqzjXoAiB9wwzK5CB7TbaP76peclx2s%2BT%2BG0TuVsv08IuB043pkCqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEQ2xRFYe0NdCn4y%2BKtwDGfxsSYe7CvfcgXf%2FivXXRIpzG%2BzYxnW2fw02eNgOoPoqiJns%2FXqVc7nO6oGFPPrug7gJfm%2BbvWvwAKnB3wVCfbjwpRGGDa1fwzaI9H1lhQ298k4ZN%2FOWnzbyH1V6us2yFqlBFjaB%2FixgvofVexXRZCeVd9M1xi97BF%2Fc8aJCeR%2F998xu5D3trLF2F8BcRBmaqnO1JZ9qzIJHThnuM2bXYI7keUzYbddkCi3trUanSokV9jv4subKQdabtR77sHiUKcZCu7VE0wr6AlPH5fkhj7iaOvP%2B0pFjCDyUl5OA5nmuXznZEyrj0GNW6eq%2FeCKlgoJc4rRdb1SkjzHZPHaeRCswa%2BT%2BODtubr%2Bj2AdlGqm2l%2BuDtdE%2BUm7eI1xrzmIeWAGYnSpNhtQlMcxGH1EcnUldkcu26GVIVcFyoglHfE%2FVOvMnMCkVHw1%2BqypIfcpVf%2BhbGMY320TkeQ%2F12YD6lSbo%2BDoDMQfCH4i5%2FQpZtIdME8yCVVHVxbUBveENMeZxEdj1AdA2i%2BrnkSzyjGEgXR52Rgi8V1tEyLyPDxUYh7uLOkAlje9n5yCoXn%2FCNqErxCRqkGdRdzYt4A%2FlxMs%2FV24B2DCZ2I4lZbfQuHiVCe3Ca6l7Z0uC94ijHa0w%2FqnLygY6pgHzq4FleQYhInPXwZy39ZwrtBSKKnj4YxkQbwuzA%2FwcBHSezpZBip79PGDjBolEd1huiZfpDQZ3ebAt%2B0d8k0tJwMjAFwYStOsB1syOJ9VoibHAzNp2lTxgWUk4RfEH9O4YIu9NgoALJzm47AnoZig7zhQm5H8VDTt9E%2BDAYWWcsMe2sQDOD9kltdkb5x8jfrpsECrBI2H7GYdpD4KWQT0nIO4syduc&X-Amz-Signature=70bda9431c7b082a778421b36ca8b390e9da641f369c87f27afebcecbeecdfb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGSKZFPZ%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T010647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB5gtELl5yZy0xNlP5bsBztZzIOLpC%2F2aAUd2LUG9mdXAiAPgFXKBSQDcw5mA6rb3jYyAT1KPVfYNfqaOj7bKiCB8yqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPBtjVA3Kisq%2FBkcIKtwDS5g2vldvKEgiC643cU7ErCDBxN84CXsAGe5jPc2fCdxNnHsSqJm3INLloZ%2BBQwyLBES4lwUa7qoZ9Xt42GgLsSsM57T1YgHQp%2BRQD4J0FL6qe0khp2P8oZcOT%2B9M8qMp2erKJfdxdtbyfFhvxkY64YRRHJKVpncnClbmC6wfv9Jrj%2B5J1cYGhAASY62BtQxyGJLL8rG4uaQGqwdsN1c7S%2BkfI7Xesis2vxR9X5KqKcpatP9xSX6Z5aK24jxpQL5LX8v1nqbZuh4VGc90Az0K8xQ6TDAq4o2t%2BoZUUw4EsozZh6OJWBzbrPxnZVitpbG%2BtC0FC5iQR4L%2BRCoqKBRrbeqC1tEr1tx4qMrZvk2tL5RmvyzESg3JRd24fXh%2FxjhkG27gBbJQfDF0Ye7q25j3i0HBTLYurfruyewp%2FS%2BTxKIt%2Bp%2BWRMYjcSapYnMY%2B7TRYh1ltbvPJ4vJ12SKoZSLwnQxAxL2xnvzfpbP1tgYgtvDBxF0h91zdIq8TV5FxkAdJ09hWuZX3ojjKuxDaSr%2FBeNqO3bzobahD7yZpAPeE3JSRmgpq0eYroHEcsZ7jdaNIFjGn%2FXD1ct%2FLU82w3zHMh5gFhb5NGn5%2BhrzE7jKwxeDcz2khVYj3CPhyPswv8jMygY6pgERnvpuy9edciN5V67tNMuvrhjOaJoi2oD3eeXYov4oa%2BE50PqzLtwqe4cz8B%2Bw3f%2BFsw9YN%2BdWRzSKYGR%2Fy2zsqfpvXf1%2BXOrLXpmS0vY2Ndi9%2FGVYeel377wae5AxFqfK7ybqWfbKtNvlwpZYK511RSBOMw6v7ckRYTL1RBGg%2BCFfwuGg8p3Sch5h9nL3Dj4eRdOW%2F5bepM9ZqnVfJppIOV3x8i7T&X-Amz-Signature=33a99f1a3d5b1303f3eb6690a3474d7fbda02e84f15638b89cd7799054168c01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGSKZFPZ%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T010647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB5gtELl5yZy0xNlP5bsBztZzIOLpC%2F2aAUd2LUG9mdXAiAPgFXKBSQDcw5mA6rb3jYyAT1KPVfYNfqaOj7bKiCB8yqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPBtjVA3Kisq%2FBkcIKtwDS5g2vldvKEgiC643cU7ErCDBxN84CXsAGe5jPc2fCdxNnHsSqJm3INLloZ%2BBQwyLBES4lwUa7qoZ9Xt42GgLsSsM57T1YgHQp%2BRQD4J0FL6qe0khp2P8oZcOT%2B9M8qMp2erKJfdxdtbyfFhvxkY64YRRHJKVpncnClbmC6wfv9Jrj%2B5J1cYGhAASY62BtQxyGJLL8rG4uaQGqwdsN1c7S%2BkfI7Xesis2vxR9X5KqKcpatP9xSX6Z5aK24jxpQL5LX8v1nqbZuh4VGc90Az0K8xQ6TDAq4o2t%2BoZUUw4EsozZh6OJWBzbrPxnZVitpbG%2BtC0FC5iQR4L%2BRCoqKBRrbeqC1tEr1tx4qMrZvk2tL5RmvyzESg3JRd24fXh%2FxjhkG27gBbJQfDF0Ye7q25j3i0HBTLYurfruyewp%2FS%2BTxKIt%2Bp%2BWRMYjcSapYnMY%2B7TRYh1ltbvPJ4vJ12SKoZSLwnQxAxL2xnvzfpbP1tgYgtvDBxF0h91zdIq8TV5FxkAdJ09hWuZX3ojjKuxDaSr%2FBeNqO3bzobahD7yZpAPeE3JSRmgpq0eYroHEcsZ7jdaNIFjGn%2FXD1ct%2FLU82w3zHMh5gFhb5NGn5%2BhrzE7jKwxeDcz2khVYj3CPhyPswv8jMygY6pgERnvpuy9edciN5V67tNMuvrhjOaJoi2oD3eeXYov4oa%2BE50PqzLtwqe4cz8B%2Bw3f%2BFsw9YN%2BdWRzSKYGR%2Fy2zsqfpvXf1%2BXOrLXpmS0vY2Ndi9%2FGVYeel377wae5AxFqfK7ybqWfbKtNvlwpZYK511RSBOMw6v7ckRYTL1RBGg%2BCFfwuGg8p3Sch5h9nL3Dj4eRdOW%2F5bepM9ZqnVfJppIOV3x8i7T&X-Amz-Signature=f9a574db723fc6f8fc200ab8d1ed4b88be5624cb57e4d34051e5d2cfeaf1f269&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGSKZFPZ%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T010647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB5gtELl5yZy0xNlP5bsBztZzIOLpC%2F2aAUd2LUG9mdXAiAPgFXKBSQDcw5mA6rb3jYyAT1KPVfYNfqaOj7bKiCB8yqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPBtjVA3Kisq%2FBkcIKtwDS5g2vldvKEgiC643cU7ErCDBxN84CXsAGe5jPc2fCdxNnHsSqJm3INLloZ%2BBQwyLBES4lwUa7qoZ9Xt42GgLsSsM57T1YgHQp%2BRQD4J0FL6qe0khp2P8oZcOT%2B9M8qMp2erKJfdxdtbyfFhvxkY64YRRHJKVpncnClbmC6wfv9Jrj%2B5J1cYGhAASY62BtQxyGJLL8rG4uaQGqwdsN1c7S%2BkfI7Xesis2vxR9X5KqKcpatP9xSX6Z5aK24jxpQL5LX8v1nqbZuh4VGc90Az0K8xQ6TDAq4o2t%2BoZUUw4EsozZh6OJWBzbrPxnZVitpbG%2BtC0FC5iQR4L%2BRCoqKBRrbeqC1tEr1tx4qMrZvk2tL5RmvyzESg3JRd24fXh%2FxjhkG27gBbJQfDF0Ye7q25j3i0HBTLYurfruyewp%2FS%2BTxKIt%2Bp%2BWRMYjcSapYnMY%2B7TRYh1ltbvPJ4vJ12SKoZSLwnQxAxL2xnvzfpbP1tgYgtvDBxF0h91zdIq8TV5FxkAdJ09hWuZX3ojjKuxDaSr%2FBeNqO3bzobahD7yZpAPeE3JSRmgpq0eYroHEcsZ7jdaNIFjGn%2FXD1ct%2FLU82w3zHMh5gFhb5NGn5%2BhrzE7jKwxeDcz2khVYj3CPhyPswv8jMygY6pgERnvpuy9edciN5V67tNMuvrhjOaJoi2oD3eeXYov4oa%2BE50PqzLtwqe4cz8B%2Bw3f%2BFsw9YN%2BdWRzSKYGR%2Fy2zsqfpvXf1%2BXOrLXpmS0vY2Ndi9%2FGVYeel377wae5AxFqfK7ybqWfbKtNvlwpZYK511RSBOMw6v7ckRYTL1RBGg%2BCFfwuGg8p3Sch5h9nL3Dj4eRdOW%2F5bepM9ZqnVfJppIOV3x8i7T&X-Amz-Signature=0146c66a5d33cd1dd476157b55476a17afa9b0cbbff302d8f3602ed29a8c86ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGSKZFPZ%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T010647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB5gtELl5yZy0xNlP5bsBztZzIOLpC%2F2aAUd2LUG9mdXAiAPgFXKBSQDcw5mA6rb3jYyAT1KPVfYNfqaOj7bKiCB8yqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPBtjVA3Kisq%2FBkcIKtwDS5g2vldvKEgiC643cU7ErCDBxN84CXsAGe5jPc2fCdxNnHsSqJm3INLloZ%2BBQwyLBES4lwUa7qoZ9Xt42GgLsSsM57T1YgHQp%2BRQD4J0FL6qe0khp2P8oZcOT%2B9M8qMp2erKJfdxdtbyfFhvxkY64YRRHJKVpncnClbmC6wfv9Jrj%2B5J1cYGhAASY62BtQxyGJLL8rG4uaQGqwdsN1c7S%2BkfI7Xesis2vxR9X5KqKcpatP9xSX6Z5aK24jxpQL5LX8v1nqbZuh4VGc90Az0K8xQ6TDAq4o2t%2BoZUUw4EsozZh6OJWBzbrPxnZVitpbG%2BtC0FC5iQR4L%2BRCoqKBRrbeqC1tEr1tx4qMrZvk2tL5RmvyzESg3JRd24fXh%2FxjhkG27gBbJQfDF0Ye7q25j3i0HBTLYurfruyewp%2FS%2BTxKIt%2Bp%2BWRMYjcSapYnMY%2B7TRYh1ltbvPJ4vJ12SKoZSLwnQxAxL2xnvzfpbP1tgYgtvDBxF0h91zdIq8TV5FxkAdJ09hWuZX3ojjKuxDaSr%2FBeNqO3bzobahD7yZpAPeE3JSRmgpq0eYroHEcsZ7jdaNIFjGn%2FXD1ct%2FLU82w3zHMh5gFhb5NGn5%2BhrzE7jKwxeDcz2khVYj3CPhyPswv8jMygY6pgERnvpuy9edciN5V67tNMuvrhjOaJoi2oD3eeXYov4oa%2BE50PqzLtwqe4cz8B%2Bw3f%2BFsw9YN%2BdWRzSKYGR%2Fy2zsqfpvXf1%2BXOrLXpmS0vY2Ndi9%2FGVYeel377wae5AxFqfK7ybqWfbKtNvlwpZYK511RSBOMw6v7ckRYTL1RBGg%2BCFfwuGg8p3Sch5h9nL3Dj4eRdOW%2F5bepM9ZqnVfJppIOV3x8i7T&X-Amz-Signature=49f0424e37fbdfcf952bb54db1ec1da4c168eb3e6ec084bb281fceb03953a435&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGSKZFPZ%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T010647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB5gtELl5yZy0xNlP5bsBztZzIOLpC%2F2aAUd2LUG9mdXAiAPgFXKBSQDcw5mA6rb3jYyAT1KPVfYNfqaOj7bKiCB8yqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPBtjVA3Kisq%2FBkcIKtwDS5g2vldvKEgiC643cU7ErCDBxN84CXsAGe5jPc2fCdxNnHsSqJm3INLloZ%2BBQwyLBES4lwUa7qoZ9Xt42GgLsSsM57T1YgHQp%2BRQD4J0FL6qe0khp2P8oZcOT%2B9M8qMp2erKJfdxdtbyfFhvxkY64YRRHJKVpncnClbmC6wfv9Jrj%2B5J1cYGhAASY62BtQxyGJLL8rG4uaQGqwdsN1c7S%2BkfI7Xesis2vxR9X5KqKcpatP9xSX6Z5aK24jxpQL5LX8v1nqbZuh4VGc90Az0K8xQ6TDAq4o2t%2BoZUUw4EsozZh6OJWBzbrPxnZVitpbG%2BtC0FC5iQR4L%2BRCoqKBRrbeqC1tEr1tx4qMrZvk2tL5RmvyzESg3JRd24fXh%2FxjhkG27gBbJQfDF0Ye7q25j3i0HBTLYurfruyewp%2FS%2BTxKIt%2Bp%2BWRMYjcSapYnMY%2B7TRYh1ltbvPJ4vJ12SKoZSLwnQxAxL2xnvzfpbP1tgYgtvDBxF0h91zdIq8TV5FxkAdJ09hWuZX3ojjKuxDaSr%2FBeNqO3bzobahD7yZpAPeE3JSRmgpq0eYroHEcsZ7jdaNIFjGn%2FXD1ct%2FLU82w3zHMh5gFhb5NGn5%2BhrzE7jKwxeDcz2khVYj3CPhyPswv8jMygY6pgERnvpuy9edciN5V67tNMuvrhjOaJoi2oD3eeXYov4oa%2BE50PqzLtwqe4cz8B%2Bw3f%2BFsw9YN%2BdWRzSKYGR%2Fy2zsqfpvXf1%2BXOrLXpmS0vY2Ndi9%2FGVYeel377wae5AxFqfK7ybqWfbKtNvlwpZYK511RSBOMw6v7ckRYTL1RBGg%2BCFfwuGg8p3Sch5h9nL3Dj4eRdOW%2F5bepM9ZqnVfJppIOV3x8i7T&X-Amz-Signature=442d1c581af6a16b1fda43e42b8b93ac9706850886f72ef85af357f3354d2c87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLP6KUDM%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T010647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGz8BtTJ%2Fny1Y688ueJb0EnjDgRMmIQvP4hjtOMqzjXoAiB9wwzK5CB7TbaP76peclx2s%2BT%2BG0TuVsv08IuB043pkCqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEQ2xRFYe0NdCn4y%2BKtwDGfxsSYe7CvfcgXf%2FivXXRIpzG%2BzYxnW2fw02eNgOoPoqiJns%2FXqVc7nO6oGFPPrug7gJfm%2BbvWvwAKnB3wVCfbjwpRGGDa1fwzaI9H1lhQ298k4ZN%2FOWnzbyH1V6us2yFqlBFjaB%2FixgvofVexXRZCeVd9M1xi97BF%2Fc8aJCeR%2F998xu5D3trLF2F8BcRBmaqnO1JZ9qzIJHThnuM2bXYI7keUzYbddkCi3trUanSokV9jv4subKQdabtR77sHiUKcZCu7VE0wr6AlPH5fkhj7iaOvP%2B0pFjCDyUl5OA5nmuXznZEyrj0GNW6eq%2FeCKlgoJc4rRdb1SkjzHZPHaeRCswa%2BT%2BODtubr%2Bj2AdlGqm2l%2BuDtdE%2BUm7eI1xrzmIeWAGYnSpNhtQlMcxGH1EcnUldkcu26GVIVcFyoglHfE%2FVOvMnMCkVHw1%2BqypIfcpVf%2BhbGMY320TkeQ%2F12YD6lSbo%2BDoDMQfCH4i5%2FQpZtIdME8yCVVHVxbUBveENMeZxEdj1AdA2i%2BrnkSzyjGEgXR52Rgi8V1tEyLyPDxUYh7uLOkAlje9n5yCoXn%2FCNqErxCRqkGdRdzYt4A%2FlxMs%2FV24B2DCZ2I4lZbfQuHiVCe3Ca6l7Z0uC94ijHa0w%2FqnLygY6pgHzq4FleQYhInPXwZy39ZwrtBSKKnj4YxkQbwuzA%2FwcBHSezpZBip79PGDjBolEd1huiZfpDQZ3ebAt%2B0d8k0tJwMjAFwYStOsB1syOJ9VoibHAzNp2lTxgWUk4RfEH9O4YIu9NgoALJzm47AnoZig7zhQm5H8VDTt9E%2BDAYWWcsMe2sQDOD9kltdkb5x8jfrpsECrBI2H7GYdpD4KWQT0nIO4syduc&X-Amz-Signature=4866c38468674a350d5e815ad132bfd475b0f5a8dfc8239e395f4255821cbabe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

