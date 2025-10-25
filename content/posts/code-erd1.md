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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGXXKAK3%2F20251025%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251025T005850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgMagy%2BN%2FGKc%2FAWKhfrdW09Xoj6txFU5FPy1tNbZ2iZAIgaaYAZNiGW2wHU5BgIdz2knnMR4jlykPh3KCA2kQmJC8q%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDBIMTMEgnUD6kapC%2FyrcA76f80c2TiHrgVohCOQis9eGglYw%2FBlX80c95yoG2cTWxZCXMTqei3IossaVLHAiBRaYnJJfH8E0ZSkpTHK6VA3ix%2BXyX%2BjSkylpusHWEP7Ldm904aEPsIdlyc7A92sBl5uOpt6MCcQ2UDkgI%2FrysK5o19JohoYgva3UpWXgcTNQQb543F6ty3AKOmYPJDO%2FiRHEwR%2FHsAgGNwTazvj0IXHVmXxdiZkH%2FeLm7S8CMuhi1oies3%2FBPsvSiH7dedA3e%2BrTx%2FAFciq1MgS%2FxKlqvliuU56lNOMZH6D2A1GDl88HKPqzGZhXwGykD%2F5vqTrBR6BXnnjHLxUfgU0Kox%2FpcM75rdse8nCQ%2BLJ2GRcV7ezDpIoC9bte03kxjI1MP4a0VNmjin52oYaW5PQiSZvEc%2Fi1UDAgjnsbo5ByF3SguhCvVvmqIzqouuzpKc08np8MHDloEhaP6%2BVqgSDpvFrWjurTaEIuDsVUIKPvrmv4V2sDrbZG%2FNgVD%2BJuJAnYuSSugH6aWHWzDvTgqFO2NVBgqvHMsfWMhKwLXjQH%2BtI2FG2jZaMhwlxX5FOF%2BqnsVlqX9SKylJYjaTJ54Wb8dq%2BgCgNA7RjL%2FI%2BxFuxU0OWE4ftD%2BRM32zAnbBOaPHpBMLe08McGOqUBsqFijeGh4n8Edhh60A3q%2FgLVPNAdx%2BZpRydCDJIvW108HJSGOM9Auy8gH7f%2BxbsqMhkCvHKwJFGWGMLXHTydX%2BUY2MLp%2FQdT4FYO6%2BtPUQwkwg2MMGeILnbPtkmc282m75%2BM80p4qjIIRpHonJLVQRWpYbxYsD2JVVoDjNLr3vHOk0QK%2FSVWwaiGHrh8yYSKF8USFi6R9qD%2F0Zggzyif6N8FRGg2&X-Amz-Signature=dd240e2c59ec86f79e1c6946a698595c4d4afb8c5542b56c8804fe8433aed9ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WS6Y25Y6%2F20251025%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251025T005851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCINJ5eRZSvwnh66w1fJSZa0Hy3qrdgdEk31XhlnhTwTgIgH8%2B3ZBtzJjF5v1yv45CqytT4I5ossJ8WW9HIxjyxoK0q%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDBpP70x%2Fik6PPH0LQCrcA7EbUuyUhqKonQhpkFOocTtLJTBm54cD3GXhLn4ySzqMvQgHKeGUdY%2F2vgnKPAXoYAwZsWKGVJQ9S7xs4E0tvWmmZjuGEKFY1IPV%2BWnC%2FSvKCP4q5%2FnsKgJmaip8A%2BssYjlkQe1yB1SPvk1mMVrGHaljVtLCcTdDtCF3p1DL4ABrlJQAmhlLXQdqtIGV9YBrnG%2FYbZxtq0oyq%2B%2BZYapVeUsdRmJGtN868H%2BT%2FJmxsydRfmDJBenGSO9UkDo5dUeI9IvdH8SHSX77me4Gf7SC6JSE%2F0I2v5sKX3atRppALM2V%2B%2FQwdo1Ma6aU4Thymz303WVFxet%2FeE76iuuqiEX9t2eVrdDjncWwOFM%2Bs2W2pY4B%2FRLzohokYsyUylSjP3%2FmU%2FBmN6SAijkVJSXEtqqy0PWuzA6WeMnw%2FYzqrGH2%2Bcjs711%2BIwFOmvnwdZpcewPQWB%2FblNbfxklVpS0ZO4BFSRUzt%2BVqcWbYDJ9rQOWcG9feeBQWL%2FtDOWBvNRxJ4U5SqqcF%2FURDQhobqc34gfAGR0JloBZprIAZYR4tFx5KLZsdEenH2jCwfoz2tymoLDeMKL%2B7nVoJsPozgsmf8bW7ebRddc4IqlbJkz3NBsRgOY1AKxhLvhOeIyrNwZP4MI208McGOqUBxl5xbZWEqHCSoPmBYGIDQ%2BXmkV34r1cBTa9E%2BEKECsdhhvzKB2rh0dHM6stDXHn8d8cmw9OlE3MTMyvmQJvmaqvwfX7XNiiM7Sjb%2Body%2Bhe4Iy%2Bs8PfyNKN3lThrE9p%2FwmHXM6v0Y5TU%2FEAG00mi732kvs2YDz%2BDCNrBM9Un06EBS6t7qkkPcbxAffeb22u8LcGFjx8KpgwyznjZB%2FkSS8VvJHsr&X-Amz-Signature=62e1657a06c6608158d9ab1fe7db2f6c186c501d166221718528de170de10c1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WS6Y25Y6%2F20251025%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251025T005851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCINJ5eRZSvwnh66w1fJSZa0Hy3qrdgdEk31XhlnhTwTgIgH8%2B3ZBtzJjF5v1yv45CqytT4I5ossJ8WW9HIxjyxoK0q%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDBpP70x%2Fik6PPH0LQCrcA7EbUuyUhqKonQhpkFOocTtLJTBm54cD3GXhLn4ySzqMvQgHKeGUdY%2F2vgnKPAXoYAwZsWKGVJQ9S7xs4E0tvWmmZjuGEKFY1IPV%2BWnC%2FSvKCP4q5%2FnsKgJmaip8A%2BssYjlkQe1yB1SPvk1mMVrGHaljVtLCcTdDtCF3p1DL4ABrlJQAmhlLXQdqtIGV9YBrnG%2FYbZxtq0oyq%2B%2BZYapVeUsdRmJGtN868H%2BT%2FJmxsydRfmDJBenGSO9UkDo5dUeI9IvdH8SHSX77me4Gf7SC6JSE%2F0I2v5sKX3atRppALM2V%2B%2FQwdo1Ma6aU4Thymz303WVFxet%2FeE76iuuqiEX9t2eVrdDjncWwOFM%2Bs2W2pY4B%2FRLzohokYsyUylSjP3%2FmU%2FBmN6SAijkVJSXEtqqy0PWuzA6WeMnw%2FYzqrGH2%2Bcjs711%2BIwFOmvnwdZpcewPQWB%2FblNbfxklVpS0ZO4BFSRUzt%2BVqcWbYDJ9rQOWcG9feeBQWL%2FtDOWBvNRxJ4U5SqqcF%2FURDQhobqc34gfAGR0JloBZprIAZYR4tFx5KLZsdEenH2jCwfoz2tymoLDeMKL%2B7nVoJsPozgsmf8bW7ebRddc4IqlbJkz3NBsRgOY1AKxhLvhOeIyrNwZP4MI208McGOqUBxl5xbZWEqHCSoPmBYGIDQ%2BXmkV34r1cBTa9E%2BEKECsdhhvzKB2rh0dHM6stDXHn8d8cmw9OlE3MTMyvmQJvmaqvwfX7XNiiM7Sjb%2Body%2Bhe4Iy%2Bs8PfyNKN3lThrE9p%2FwmHXM6v0Y5TU%2FEAG00mi732kvs2YDz%2BDCNrBM9Un06EBS6t7qkkPcbxAffeb22u8LcGFjx8KpgwyznjZB%2FkSS8VvJHsr&X-Amz-Signature=7fb557f13c0848fd791acb2f112c3f036740f68d0293d4b61e5f3a50d9f8079a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WS6Y25Y6%2F20251025%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251025T005850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCINJ5eRZSvwnh66w1fJSZa0Hy3qrdgdEk31XhlnhTwTgIgH8%2B3ZBtzJjF5v1yv45CqytT4I5ossJ8WW9HIxjyxoK0q%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDBpP70x%2Fik6PPH0LQCrcA7EbUuyUhqKonQhpkFOocTtLJTBm54cD3GXhLn4ySzqMvQgHKeGUdY%2F2vgnKPAXoYAwZsWKGVJQ9S7xs4E0tvWmmZjuGEKFY1IPV%2BWnC%2FSvKCP4q5%2FnsKgJmaip8A%2BssYjlkQe1yB1SPvk1mMVrGHaljVtLCcTdDtCF3p1DL4ABrlJQAmhlLXQdqtIGV9YBrnG%2FYbZxtq0oyq%2B%2BZYapVeUsdRmJGtN868H%2BT%2FJmxsydRfmDJBenGSO9UkDo5dUeI9IvdH8SHSX77me4Gf7SC6JSE%2F0I2v5sKX3atRppALM2V%2B%2FQwdo1Ma6aU4Thymz303WVFxet%2FeE76iuuqiEX9t2eVrdDjncWwOFM%2Bs2W2pY4B%2FRLzohokYsyUylSjP3%2FmU%2FBmN6SAijkVJSXEtqqy0PWuzA6WeMnw%2FYzqrGH2%2Bcjs711%2BIwFOmvnwdZpcewPQWB%2FblNbfxklVpS0ZO4BFSRUzt%2BVqcWbYDJ9rQOWcG9feeBQWL%2FtDOWBvNRxJ4U5SqqcF%2FURDQhobqc34gfAGR0JloBZprIAZYR4tFx5KLZsdEenH2jCwfoz2tymoLDeMKL%2B7nVoJsPozgsmf8bW7ebRddc4IqlbJkz3NBsRgOY1AKxhLvhOeIyrNwZP4MI208McGOqUBxl5xbZWEqHCSoPmBYGIDQ%2BXmkV34r1cBTa9E%2BEKECsdhhvzKB2rh0dHM6stDXHn8d8cmw9OlE3MTMyvmQJvmaqvwfX7XNiiM7Sjb%2Body%2Bhe4Iy%2Bs8PfyNKN3lThrE9p%2FwmHXM6v0Y5TU%2FEAG00mi732kvs2YDz%2BDCNrBM9Un06EBS6t7qkkPcbxAffeb22u8LcGFjx8KpgwyznjZB%2FkSS8VvJHsr&X-Amz-Signature=083acd174ba68faa5f9f2fe694f4dd75e64a7b4e996e8663d90896a54a3763fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WS6Y25Y6%2F20251025%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251025T005851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCINJ5eRZSvwnh66w1fJSZa0Hy3qrdgdEk31XhlnhTwTgIgH8%2B3ZBtzJjF5v1yv45CqytT4I5ossJ8WW9HIxjyxoK0q%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDBpP70x%2Fik6PPH0LQCrcA7EbUuyUhqKonQhpkFOocTtLJTBm54cD3GXhLn4ySzqMvQgHKeGUdY%2F2vgnKPAXoYAwZsWKGVJQ9S7xs4E0tvWmmZjuGEKFY1IPV%2BWnC%2FSvKCP4q5%2FnsKgJmaip8A%2BssYjlkQe1yB1SPvk1mMVrGHaljVtLCcTdDtCF3p1DL4ABrlJQAmhlLXQdqtIGV9YBrnG%2FYbZxtq0oyq%2B%2BZYapVeUsdRmJGtN868H%2BT%2FJmxsydRfmDJBenGSO9UkDo5dUeI9IvdH8SHSX77me4Gf7SC6JSE%2F0I2v5sKX3atRppALM2V%2B%2FQwdo1Ma6aU4Thymz303WVFxet%2FeE76iuuqiEX9t2eVrdDjncWwOFM%2Bs2W2pY4B%2FRLzohokYsyUylSjP3%2FmU%2FBmN6SAijkVJSXEtqqy0PWuzA6WeMnw%2FYzqrGH2%2Bcjs711%2BIwFOmvnwdZpcewPQWB%2FblNbfxklVpS0ZO4BFSRUzt%2BVqcWbYDJ9rQOWcG9feeBQWL%2FtDOWBvNRxJ4U5SqqcF%2FURDQhobqc34gfAGR0JloBZprIAZYR4tFx5KLZsdEenH2jCwfoz2tymoLDeMKL%2B7nVoJsPozgsmf8bW7ebRddc4IqlbJkz3NBsRgOY1AKxhLvhOeIyrNwZP4MI208McGOqUBxl5xbZWEqHCSoPmBYGIDQ%2BXmkV34r1cBTa9E%2BEKECsdhhvzKB2rh0dHM6stDXHn8d8cmw9OlE3MTMyvmQJvmaqvwfX7XNiiM7Sjb%2Body%2Bhe4Iy%2Bs8PfyNKN3lThrE9p%2FwmHXM6v0Y5TU%2FEAG00mi732kvs2YDz%2BDCNrBM9Un06EBS6t7qkkPcbxAffeb22u8LcGFjx8KpgwyznjZB%2FkSS8VvJHsr&X-Amz-Signature=5fc64841da367782dab7d866cb3faa2a89d478ae8825f3a31348cc10dd31ecbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WS6Y25Y6%2F20251025%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251025T005851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCINJ5eRZSvwnh66w1fJSZa0Hy3qrdgdEk31XhlnhTwTgIgH8%2B3ZBtzJjF5v1yv45CqytT4I5ossJ8WW9HIxjyxoK0q%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDBpP70x%2Fik6PPH0LQCrcA7EbUuyUhqKonQhpkFOocTtLJTBm54cD3GXhLn4ySzqMvQgHKeGUdY%2F2vgnKPAXoYAwZsWKGVJQ9S7xs4E0tvWmmZjuGEKFY1IPV%2BWnC%2FSvKCP4q5%2FnsKgJmaip8A%2BssYjlkQe1yB1SPvk1mMVrGHaljVtLCcTdDtCF3p1DL4ABrlJQAmhlLXQdqtIGV9YBrnG%2FYbZxtq0oyq%2B%2BZYapVeUsdRmJGtN868H%2BT%2FJmxsydRfmDJBenGSO9UkDo5dUeI9IvdH8SHSX77me4Gf7SC6JSE%2F0I2v5sKX3atRppALM2V%2B%2FQwdo1Ma6aU4Thymz303WVFxet%2FeE76iuuqiEX9t2eVrdDjncWwOFM%2Bs2W2pY4B%2FRLzohokYsyUylSjP3%2FmU%2FBmN6SAijkVJSXEtqqy0PWuzA6WeMnw%2FYzqrGH2%2Bcjs711%2BIwFOmvnwdZpcewPQWB%2FblNbfxklVpS0ZO4BFSRUzt%2BVqcWbYDJ9rQOWcG9feeBQWL%2FtDOWBvNRxJ4U5SqqcF%2FURDQhobqc34gfAGR0JloBZprIAZYR4tFx5KLZsdEenH2jCwfoz2tymoLDeMKL%2B7nVoJsPozgsmf8bW7ebRddc4IqlbJkz3NBsRgOY1AKxhLvhOeIyrNwZP4MI208McGOqUBxl5xbZWEqHCSoPmBYGIDQ%2BXmkV34r1cBTa9E%2BEKECsdhhvzKB2rh0dHM6stDXHn8d8cmw9OlE3MTMyvmQJvmaqvwfX7XNiiM7Sjb%2Body%2Bhe4Iy%2Bs8PfyNKN3lThrE9p%2FwmHXM6v0Y5TU%2FEAG00mi732kvs2YDz%2BDCNrBM9Un06EBS6t7qkkPcbxAffeb22u8LcGFjx8KpgwyznjZB%2FkSS8VvJHsr&X-Amz-Signature=6eca3cfe11b69ae5d4a91bf3f1437ff71d4b6530171e2c2f07252a307b274b16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGXXKAK3%2F20251025%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251025T005850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgMagy%2BN%2FGKc%2FAWKhfrdW09Xoj6txFU5FPy1tNbZ2iZAIgaaYAZNiGW2wHU5BgIdz2knnMR4jlykPh3KCA2kQmJC8q%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDBIMTMEgnUD6kapC%2FyrcA76f80c2TiHrgVohCOQis9eGglYw%2FBlX80c95yoG2cTWxZCXMTqei3IossaVLHAiBRaYnJJfH8E0ZSkpTHK6VA3ix%2BXyX%2BjSkylpusHWEP7Ldm904aEPsIdlyc7A92sBl5uOpt6MCcQ2UDkgI%2FrysK5o19JohoYgva3UpWXgcTNQQb543F6ty3AKOmYPJDO%2FiRHEwR%2FHsAgGNwTazvj0IXHVmXxdiZkH%2FeLm7S8CMuhi1oies3%2FBPsvSiH7dedA3e%2BrTx%2FAFciq1MgS%2FxKlqvliuU56lNOMZH6D2A1GDl88HKPqzGZhXwGykD%2F5vqTrBR6BXnnjHLxUfgU0Kox%2FpcM75rdse8nCQ%2BLJ2GRcV7ezDpIoC9bte03kxjI1MP4a0VNmjin52oYaW5PQiSZvEc%2Fi1UDAgjnsbo5ByF3SguhCvVvmqIzqouuzpKc08np8MHDloEhaP6%2BVqgSDpvFrWjurTaEIuDsVUIKPvrmv4V2sDrbZG%2FNgVD%2BJuJAnYuSSugH6aWHWzDvTgqFO2NVBgqvHMsfWMhKwLXjQH%2BtI2FG2jZaMhwlxX5FOF%2BqnsVlqX9SKylJYjaTJ54Wb8dq%2BgCgNA7RjL%2FI%2BxFuxU0OWE4ftD%2BRM32zAnbBOaPHpBMLe08McGOqUBsqFijeGh4n8Edhh60A3q%2FgLVPNAdx%2BZpRydCDJIvW108HJSGOM9Auy8gH7f%2BxbsqMhkCvHKwJFGWGMLXHTydX%2BUY2MLp%2FQdT4FYO6%2BtPUQwkwg2MMGeILnbPtkmc282m75%2BM80p4qjIIRpHonJLVQRWpYbxYsD2JVVoDjNLr3vHOk0QK%2FSVWwaiGHrh8yYSKF8USFi6R9qD%2F0Zggzyif6N8FRGg2&X-Amz-Signature=645b57771ec0a007eaee81825ae304ddcbe5d10aa38df59fcdb1e18785100b3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

