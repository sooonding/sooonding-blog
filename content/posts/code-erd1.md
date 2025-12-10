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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BL2JATZ%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T010603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIHmc7QDJadv8hGMHm9fcfYOH47IXip4nDHJ2ubaDwpLeAiBmWlJCHUH3oKJr3RgWJLePifBLmJ7IEbglYCwF6ziN3CqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMubmxjmWY4tmRZ5SpKtwD3g7jQRq2hEKgg4Y8R2eoD5mJOZMpgrmH2u7dkL4X1nA3PcNNrr6Ll7%2FACPPkZuG3zjqPHP1mRUIZo3RKYTAz3S17T%2FSBgFcwzXCUNv6S7%2BL3vueTogH3yizGGzl%2BuF5tBTj2AreSelSuUvOCiMSHCVjCp93ACU1nrq4VXW3sW5R57CnlgSjMtB%2F0g8YQ5no%2FA5nkxF380valFb6j2ankVp2%2F33F9FYVHc3aGWkFbiR6qFwByWsWxOp7y1hikHgHNWUhxEsPSHJ7fan3kyO%2FgK7MxyJQb%2Bs8y0Oxh3b0yazTMe8hwIuKtZNZ5A297elUEx7n2ZdL5IvZFLAK25aHN%2FFj3JZrjFvEjb0Krr7VdinfcJ8qoFiUEKA%2FrUY9K61d%2FOhM5JTo%2F07gMqn0X7QX2YZO3Xav7WJ6w90bPfSJKtRWrw83e5T%2FvDJVUO4HKo75h80k%2ByrXbxW7bjGjCkJmc3V1izOTpC5vzSpgftQnzdiyt7z4txa%2BuEz0MetRlNQTrehM9d7UjHAb36SUpu8ys%2B4FY6ovtbyzla%2B6CgAmGgMFaCpJEUKlKO2D8JX7uXQqy6rIepDpn1o8Z2fdEB5CTdPFf3ZEfF%2FPkJ9z646Ui1VsLegpzx3jbcKgS4NgwnOziyQY6pgGraaLsnhP4SXtl9fmqQBQ0Mefe8faEJgPBEaeDxKmglJyNPgcIh6MMBl%2B9TPSCYKBMAmEfwHOnk2stFjpTDcOw%2B0LKBKMmVzyCgxyfVuL0RQfho0lZoNIKs9T%2BBVDImyL0rXdx7GOh%2B25hWVELuN9DbKtZumCxSIooOmvwcYpJjiaVxDZBkEzXskobdZ2PDSbYaomeRatQKGGqTHaDYEM4rqsU7Gda&X-Amz-Signature=0f4ac246a9ec768fac8ab8a9e74f3a20e4a3953919094f0c5ae1485761d01058&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGEEG3EQ%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T010603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIH4dWvYV6JWXt4VcKfz5mn3PhU2Baupz0%2B96yEs2dcP2AiAHoIbZQj9N%2B%2Btd612Ob8eQx%2FY3t0nYDfGeniqph1GosyqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMT%2F5tVeum2QRjf6pwKtwDW8dTDOlvS7Ge%2BduUd93MkpWRdkJZ7yjnsUXRerQn3ij%2FXWBK%2BTQCmGDpwrtq5aSVuZmSJc18K3Qpl5P%2FRnkeorLsbpVX3lwbv78TfdXYi7qrgBRcDYKGD173jy53EZDxa8FR%2FmdDpgGzgmxcIK8lAecAs864UzihAndqFQ%2FV8QuUC9H6jTDeeFL%2F8b2ODOhriZphYAG0XhuduvkOyXOt640RsqjsRsnZXUxZmgKi2z6ncNZZWfP5hwAO2YVqbZmWF1ePfQDDIAzDiU5Qrku6OksUieIGbgzfach0IJxgmbZ4BH1TLXE3X%2FbiHLHn0438%2BnYOAQXgouEu24v2KX0B71awf%2BAB1JTTVdkoEsXgOe3BB45JZGUzGQrogKZkPmZLuljAsyx8YsqUWGbneF%2FkCyiEi82Gkna3WPu%2FfGN2%2BZPBTkLDnneLP1fNKfUOdpcmm4KXh5nWWQBE6s6jMLBVzTnKd%2FTEDoLr9YyjMFuEOVdkMH6%2FP%2FqetFW3XTeKfQ4V55IZf0Bjxw3eW72te%2BFX%2F%2Fdiq27zb13PTuP4Mx4%2FlMi6WBT4xNEkcUh4Jc%2F45D5Dg7UAzlRB7Gl6u4Hu80PphghP6HqZ9C3R2Hb2ZGqIx9m%2FQ4rgMctHPRtTyZow3OviyQY6pgHWTUAfWhlQEvgu8LAOe56MC1lLKGP68QPn7dgh4WJAS27xzSPUND9TpjvZ8IkQ7XixqfB69BZ%2Fj3MzJZ7fg4j0DpfYFaMcnmr6o0%2F%2BmGvDp0ASKMnoxUCq2v%2F1N%2BVMea11Jt5yAOu9aMrRuuhH05fLqz38BCdhaliAEgOdbYfy5PsDmTordI%2FuOj4Y35Vo0WvAd6Flzk%2FxIKyKkdB%2FWrevrOW6c7%2BM&X-Amz-Signature=ea37225adf4fa461554eb870edce9f17544c3adb87021113076b4ac2bcbf86a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGEEG3EQ%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T010603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIH4dWvYV6JWXt4VcKfz5mn3PhU2Baupz0%2B96yEs2dcP2AiAHoIbZQj9N%2B%2Btd612Ob8eQx%2FY3t0nYDfGeniqph1GosyqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMT%2F5tVeum2QRjf6pwKtwDW8dTDOlvS7Ge%2BduUd93MkpWRdkJZ7yjnsUXRerQn3ij%2FXWBK%2BTQCmGDpwrtq5aSVuZmSJc18K3Qpl5P%2FRnkeorLsbpVX3lwbv78TfdXYi7qrgBRcDYKGD173jy53EZDxa8FR%2FmdDpgGzgmxcIK8lAecAs864UzihAndqFQ%2FV8QuUC9H6jTDeeFL%2F8b2ODOhriZphYAG0XhuduvkOyXOt640RsqjsRsnZXUxZmgKi2z6ncNZZWfP5hwAO2YVqbZmWF1ePfQDDIAzDiU5Qrku6OksUieIGbgzfach0IJxgmbZ4BH1TLXE3X%2FbiHLHn0438%2BnYOAQXgouEu24v2KX0B71awf%2BAB1JTTVdkoEsXgOe3BB45JZGUzGQrogKZkPmZLuljAsyx8YsqUWGbneF%2FkCyiEi82Gkna3WPu%2FfGN2%2BZPBTkLDnneLP1fNKfUOdpcmm4KXh5nWWQBE6s6jMLBVzTnKd%2FTEDoLr9YyjMFuEOVdkMH6%2FP%2FqetFW3XTeKfQ4V55IZf0Bjxw3eW72te%2BFX%2F%2Fdiq27zb13PTuP4Mx4%2FlMi6WBT4xNEkcUh4Jc%2F45D5Dg7UAzlRB7Gl6u4Hu80PphghP6HqZ9C3R2Hb2ZGqIx9m%2FQ4rgMctHPRtTyZow3OviyQY6pgHWTUAfWhlQEvgu8LAOe56MC1lLKGP68QPn7dgh4WJAS27xzSPUND9TpjvZ8IkQ7XixqfB69BZ%2Fj3MzJZ7fg4j0DpfYFaMcnmr6o0%2F%2BmGvDp0ASKMnoxUCq2v%2F1N%2BVMea11Jt5yAOu9aMrRuuhH05fLqz38BCdhaliAEgOdbYfy5PsDmTordI%2FuOj4Y35Vo0WvAd6Flzk%2FxIKyKkdB%2FWrevrOW6c7%2BM&X-Amz-Signature=7445fe807eb80c121c0b510ffb527ad3145c562e78b79c9f802738d5ee3e584d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGEEG3EQ%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T010603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIH4dWvYV6JWXt4VcKfz5mn3PhU2Baupz0%2B96yEs2dcP2AiAHoIbZQj9N%2B%2Btd612Ob8eQx%2FY3t0nYDfGeniqph1GosyqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMT%2F5tVeum2QRjf6pwKtwDW8dTDOlvS7Ge%2BduUd93MkpWRdkJZ7yjnsUXRerQn3ij%2FXWBK%2BTQCmGDpwrtq5aSVuZmSJc18K3Qpl5P%2FRnkeorLsbpVX3lwbv78TfdXYi7qrgBRcDYKGD173jy53EZDxa8FR%2FmdDpgGzgmxcIK8lAecAs864UzihAndqFQ%2FV8QuUC9H6jTDeeFL%2F8b2ODOhriZphYAG0XhuduvkOyXOt640RsqjsRsnZXUxZmgKi2z6ncNZZWfP5hwAO2YVqbZmWF1ePfQDDIAzDiU5Qrku6OksUieIGbgzfach0IJxgmbZ4BH1TLXE3X%2FbiHLHn0438%2BnYOAQXgouEu24v2KX0B71awf%2BAB1JTTVdkoEsXgOe3BB45JZGUzGQrogKZkPmZLuljAsyx8YsqUWGbneF%2FkCyiEi82Gkna3WPu%2FfGN2%2BZPBTkLDnneLP1fNKfUOdpcmm4KXh5nWWQBE6s6jMLBVzTnKd%2FTEDoLr9YyjMFuEOVdkMH6%2FP%2FqetFW3XTeKfQ4V55IZf0Bjxw3eW72te%2BFX%2F%2Fdiq27zb13PTuP4Mx4%2FlMi6WBT4xNEkcUh4Jc%2F45D5Dg7UAzlRB7Gl6u4Hu80PphghP6HqZ9C3R2Hb2ZGqIx9m%2FQ4rgMctHPRtTyZow3OviyQY6pgHWTUAfWhlQEvgu8LAOe56MC1lLKGP68QPn7dgh4WJAS27xzSPUND9TpjvZ8IkQ7XixqfB69BZ%2Fj3MzJZ7fg4j0DpfYFaMcnmr6o0%2F%2BmGvDp0ASKMnoxUCq2v%2F1N%2BVMea11Jt5yAOu9aMrRuuhH05fLqz38BCdhaliAEgOdbYfy5PsDmTordI%2FuOj4Y35Vo0WvAd6Flzk%2FxIKyKkdB%2FWrevrOW6c7%2BM&X-Amz-Signature=dcc785287ade2bfdd0d208ea6565ef09f230bb68c2e58dc860ebde13da7d27b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGEEG3EQ%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T010603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIH4dWvYV6JWXt4VcKfz5mn3PhU2Baupz0%2B96yEs2dcP2AiAHoIbZQj9N%2B%2Btd612Ob8eQx%2FY3t0nYDfGeniqph1GosyqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMT%2F5tVeum2QRjf6pwKtwDW8dTDOlvS7Ge%2BduUd93MkpWRdkJZ7yjnsUXRerQn3ij%2FXWBK%2BTQCmGDpwrtq5aSVuZmSJc18K3Qpl5P%2FRnkeorLsbpVX3lwbv78TfdXYi7qrgBRcDYKGD173jy53EZDxa8FR%2FmdDpgGzgmxcIK8lAecAs864UzihAndqFQ%2FV8QuUC9H6jTDeeFL%2F8b2ODOhriZphYAG0XhuduvkOyXOt640RsqjsRsnZXUxZmgKi2z6ncNZZWfP5hwAO2YVqbZmWF1ePfQDDIAzDiU5Qrku6OksUieIGbgzfach0IJxgmbZ4BH1TLXE3X%2FbiHLHn0438%2BnYOAQXgouEu24v2KX0B71awf%2BAB1JTTVdkoEsXgOe3BB45JZGUzGQrogKZkPmZLuljAsyx8YsqUWGbneF%2FkCyiEi82Gkna3WPu%2FfGN2%2BZPBTkLDnneLP1fNKfUOdpcmm4KXh5nWWQBE6s6jMLBVzTnKd%2FTEDoLr9YyjMFuEOVdkMH6%2FP%2FqetFW3XTeKfQ4V55IZf0Bjxw3eW72te%2BFX%2F%2Fdiq27zb13PTuP4Mx4%2FlMi6WBT4xNEkcUh4Jc%2F45D5Dg7UAzlRB7Gl6u4Hu80PphghP6HqZ9C3R2Hb2ZGqIx9m%2FQ4rgMctHPRtTyZow3OviyQY6pgHWTUAfWhlQEvgu8LAOe56MC1lLKGP68QPn7dgh4WJAS27xzSPUND9TpjvZ8IkQ7XixqfB69BZ%2Fj3MzJZ7fg4j0DpfYFaMcnmr6o0%2F%2BmGvDp0ASKMnoxUCq2v%2F1N%2BVMea11Jt5yAOu9aMrRuuhH05fLqz38BCdhaliAEgOdbYfy5PsDmTordI%2FuOj4Y35Vo0WvAd6Flzk%2FxIKyKkdB%2FWrevrOW6c7%2BM&X-Amz-Signature=273fcc033efb6c8c2a80858da0a607a2fbd5df08c40350f5f47fa902f1729493&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGEEG3EQ%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T010603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIH4dWvYV6JWXt4VcKfz5mn3PhU2Baupz0%2B96yEs2dcP2AiAHoIbZQj9N%2B%2Btd612Ob8eQx%2FY3t0nYDfGeniqph1GosyqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMT%2F5tVeum2QRjf6pwKtwDW8dTDOlvS7Ge%2BduUd93MkpWRdkJZ7yjnsUXRerQn3ij%2FXWBK%2BTQCmGDpwrtq5aSVuZmSJc18K3Qpl5P%2FRnkeorLsbpVX3lwbv78TfdXYi7qrgBRcDYKGD173jy53EZDxa8FR%2FmdDpgGzgmxcIK8lAecAs864UzihAndqFQ%2FV8QuUC9H6jTDeeFL%2F8b2ODOhriZphYAG0XhuduvkOyXOt640RsqjsRsnZXUxZmgKi2z6ncNZZWfP5hwAO2YVqbZmWF1ePfQDDIAzDiU5Qrku6OksUieIGbgzfach0IJxgmbZ4BH1TLXE3X%2FbiHLHn0438%2BnYOAQXgouEu24v2KX0B71awf%2BAB1JTTVdkoEsXgOe3BB45JZGUzGQrogKZkPmZLuljAsyx8YsqUWGbneF%2FkCyiEi82Gkna3WPu%2FfGN2%2BZPBTkLDnneLP1fNKfUOdpcmm4KXh5nWWQBE6s6jMLBVzTnKd%2FTEDoLr9YyjMFuEOVdkMH6%2FP%2FqetFW3XTeKfQ4V55IZf0Bjxw3eW72te%2BFX%2F%2Fdiq27zb13PTuP4Mx4%2FlMi6WBT4xNEkcUh4Jc%2F45D5Dg7UAzlRB7Gl6u4Hu80PphghP6HqZ9C3R2Hb2ZGqIx9m%2FQ4rgMctHPRtTyZow3OviyQY6pgHWTUAfWhlQEvgu8LAOe56MC1lLKGP68QPn7dgh4WJAS27xzSPUND9TpjvZ8IkQ7XixqfB69BZ%2Fj3MzJZ7fg4j0DpfYFaMcnmr6o0%2F%2BmGvDp0ASKMnoxUCq2v%2F1N%2BVMea11Jt5yAOu9aMrRuuhH05fLqz38BCdhaliAEgOdbYfy5PsDmTordI%2FuOj4Y35Vo0WvAd6Flzk%2FxIKyKkdB%2FWrevrOW6c7%2BM&X-Amz-Signature=76f9b5bd8ff648bca4ca097614571e41ee450905e2ed033b6158e667bd537630&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BL2JATZ%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T010603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIHmc7QDJadv8hGMHm9fcfYOH47IXip4nDHJ2ubaDwpLeAiBmWlJCHUH3oKJr3RgWJLePifBLmJ7IEbglYCwF6ziN3CqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMubmxjmWY4tmRZ5SpKtwD3g7jQRq2hEKgg4Y8R2eoD5mJOZMpgrmH2u7dkL4X1nA3PcNNrr6Ll7%2FACPPkZuG3zjqPHP1mRUIZo3RKYTAz3S17T%2FSBgFcwzXCUNv6S7%2BL3vueTogH3yizGGzl%2BuF5tBTj2AreSelSuUvOCiMSHCVjCp93ACU1nrq4VXW3sW5R57CnlgSjMtB%2F0g8YQ5no%2FA5nkxF380valFb6j2ankVp2%2F33F9FYVHc3aGWkFbiR6qFwByWsWxOp7y1hikHgHNWUhxEsPSHJ7fan3kyO%2FgK7MxyJQb%2Bs8y0Oxh3b0yazTMe8hwIuKtZNZ5A297elUEx7n2ZdL5IvZFLAK25aHN%2FFj3JZrjFvEjb0Krr7VdinfcJ8qoFiUEKA%2FrUY9K61d%2FOhM5JTo%2F07gMqn0X7QX2YZO3Xav7WJ6w90bPfSJKtRWrw83e5T%2FvDJVUO4HKo75h80k%2ByrXbxW7bjGjCkJmc3V1izOTpC5vzSpgftQnzdiyt7z4txa%2BuEz0MetRlNQTrehM9d7UjHAb36SUpu8ys%2B4FY6ovtbyzla%2B6CgAmGgMFaCpJEUKlKO2D8JX7uXQqy6rIepDpn1o8Z2fdEB5CTdPFf3ZEfF%2FPkJ9z646Ui1VsLegpzx3jbcKgS4NgwnOziyQY6pgGraaLsnhP4SXtl9fmqQBQ0Mefe8faEJgPBEaeDxKmglJyNPgcIh6MMBl%2B9TPSCYKBMAmEfwHOnk2stFjpTDcOw%2B0LKBKMmVzyCgxyfVuL0RQfho0lZoNIKs9T%2BBVDImyL0rXdx7GOh%2B25hWVELuN9DbKtZumCxSIooOmvwcYpJjiaVxDZBkEzXskobdZ2PDSbYaomeRatQKGGqTHaDYEM4rqsU7Gda&X-Amz-Signature=f43879efbaa36bd0a708b8421cfcd69ababf0cfe161eddc45de9588d36269786&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

