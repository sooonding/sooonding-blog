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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XODYNDSE%2F20260518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260518T034151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBLJ5VXYwYI1imqsXXqpGVA%2BepQLjTdaw%2Fn24oXHMgOfAiAQoXJbdxowFDWC%2BwMZ440%2FRNGaBCxymqcrmg3FEW0g8SqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjSpL0R26pKEi0YNcKtwD89oDSX4liVDSOl1DAQN0FKCnkgha2K0yVcLTXTtpMTolkVmBienGEKOGHiJjx3gX7r94ZAHj7mYNbzsxfbhx7f20o7LGb3CD2%2Fc03czQXjbYhZkOt0l8geMzELtiX5HJUlTlltdFsnjmw4DuCXaae9b36VL8pWqsTeHd50E4Ew%2Bn9ya8i%2B4H05j3tWvzuRUBa3VkRyzxEG26bhC4pW4fPNeNksXGkVwXgQJToYS9BqhYc8L1qj%2B8zqwTCX3%2BXf8mgW3WYV69sBo0FAqhVPG1oblxWAvIDnsBEsI86LVMgPkYmK6mcViRRdemrwxfVk9lqw1rCSx9xmAykdhSKCZg2ndMdDpOrcfcNZNvoKVwoGwsJQ8ty6KCkA%2FDkII25etXyY6kWPCPHm2dWxysAgKYjl6dzpPcPZYBEwwKLglNNLzZ7u2rFZiT0f0zOk6N7F2e4o4b%2FDfs3H05WJyVLKz90V4vLd53h9diMkfequicrr6%2F%2FEWdy9pTyadZpU9CmSB7%2B0f%2BAyqXI3IsqNdIklxtm%2FbzW90JZsk9Q7nYITaiS6Y%2BJlPQprOZbe0kl1yskCoSIdAzYC8Ab5YcOgaveVSmCTBSH3cv61p1WNs9iAuLgvd4WhHAerlGLcRrFPcwyO6p0AY6pgGWRjOa4zkwnGt%2F3NepjhCkVvD%2FWRZR7vrdn2I1wFHURN88ywj3kfCw4zly7BRdoKxexvs8KMluXkrl8C0CMPwYpDPsSpAqOvuhz0cwUOwdNYlgkGYafp9H15rSDPNDaQ359I9nAP0TcTcnLTA5nzrvDA7rtgExbWQiEYJMYQ%2BA9Qr8Bcwc5EhHBl9Ez%2BQxR32Zhw2ah4Gljadl8N4PSfsAV2cPMFIi&X-Amz-Signature=704f5f8216452f180d3714cd96f9e4416b3d5669080ab87f655d7a72cac9ece1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PQZFOLO%2F20260518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260518T034151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPkhCqrQbiEG7FYmP41bcyjCINWdXXZupfWe8Z5uwQYAiAovFNqx1XQMnzXlog%2Fgu8bwgpg8qKnOcH%2FvRAVSt76pCqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIME0S%2FmCmqLlxXuG3GKtwDr4cugizkN3wt3ZGXzENMdUF4pISjL269gTau%2BGMGa4v84On9JQAiDjMN4MynxDZFvR50pdJ5dHdlzDc7fMfORpEeKaUqPGoLhdrf6Bc6NpeYUQU6PlEEsNstX5j6YmrGZtNxKu%2F%2BUl2HgHSqLvcGM0eReWaIdinOhnaayN5V12B7HT78ry5vp5dPRS54ADpWUHMXwOmfb65Zu4NSS1yJgyKxrOLebdaug7K56TO102gjmdIqT1iQMKDaM4D5vHcVFMDO%2Bulu5zg23I5EetE0tKUos9tndVH%2Fzhz%2BxWOSbRwJ4qeyw1%2F0QujK9nDy5I%2Bayrx%2FLnmt1RgUHTrlaXCVU05g4i4NVKw3VJ9BCM8xfBuM6qyJT%2BP2KpwBz1ELjZgaOhiDymorEDAK0M7o39PpEaLnMiLuN5%2BN57Xd1yc8BsARiHeJtawOYWB7R0IitiOfu5eIh4u2KEH6dyF8YXZTVnvvoPhYPG5Bf%2BXHoqjmmuBkiqEHhCkt%2Brm0QwAARL04XDpcV3P%2B%2FAGSYeX9TVXjbiaR%2BP66eDJZXe4uGXbrVGbnE0PnC4DxMFmQWAyWGkodF1bCM5WJFe4d7OxmQdmk0RWBcngKB3%2Ffjb%2B9Jsp8qY%2F49ndNGntrRMgmiGIwgJSq0AY6pgGaBTQj2LcIJVNYVrwydAKtXqlqXf%2FzxN4gLbO6%2FaW53tgrxKMtF5Tu%2BxC0rNXpU1nFQsa1N5g%2Fwu1cRyuil%2F8D99%2F2kH8hDe3Rv%2BdL6IrVxcLFBd32%2BqFtN6d8HY5T9lAkgCt1eoAwjU8OOySJDGy3pllIulCQIKWMEqfwS9TOXj0xCrRj8u5IMBMVixR9BXX9248HLKj6jegb78QgAAqDTQZpmouO&X-Amz-Signature=c2df4002d5f82d1bd2f016011ebec0ec381e64489ae926fb419d932135e801f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PQZFOLO%2F20260518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260518T034151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPkhCqrQbiEG7FYmP41bcyjCINWdXXZupfWe8Z5uwQYAiAovFNqx1XQMnzXlog%2Fgu8bwgpg8qKnOcH%2FvRAVSt76pCqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIME0S%2FmCmqLlxXuG3GKtwDr4cugizkN3wt3ZGXzENMdUF4pISjL269gTau%2BGMGa4v84On9JQAiDjMN4MynxDZFvR50pdJ5dHdlzDc7fMfORpEeKaUqPGoLhdrf6Bc6NpeYUQU6PlEEsNstX5j6YmrGZtNxKu%2F%2BUl2HgHSqLvcGM0eReWaIdinOhnaayN5V12B7HT78ry5vp5dPRS54ADpWUHMXwOmfb65Zu4NSS1yJgyKxrOLebdaug7K56TO102gjmdIqT1iQMKDaM4D5vHcVFMDO%2Bulu5zg23I5EetE0tKUos9tndVH%2Fzhz%2BxWOSbRwJ4qeyw1%2F0QujK9nDy5I%2Bayrx%2FLnmt1RgUHTrlaXCVU05g4i4NVKw3VJ9BCM8xfBuM6qyJT%2BP2KpwBz1ELjZgaOhiDymorEDAK0M7o39PpEaLnMiLuN5%2BN57Xd1yc8BsARiHeJtawOYWB7R0IitiOfu5eIh4u2KEH6dyF8YXZTVnvvoPhYPG5Bf%2BXHoqjmmuBkiqEHhCkt%2Brm0QwAARL04XDpcV3P%2B%2FAGSYeX9TVXjbiaR%2BP66eDJZXe4uGXbrVGbnE0PnC4DxMFmQWAyWGkodF1bCM5WJFe4d7OxmQdmk0RWBcngKB3%2Ffjb%2B9Jsp8qY%2F49ndNGntrRMgmiGIwgJSq0AY6pgGaBTQj2LcIJVNYVrwydAKtXqlqXf%2FzxN4gLbO6%2FaW53tgrxKMtF5Tu%2BxC0rNXpU1nFQsa1N5g%2Fwu1cRyuil%2F8D99%2F2kH8hDe3Rv%2BdL6IrVxcLFBd32%2BqFtN6d8HY5T9lAkgCt1eoAwjU8OOySJDGy3pllIulCQIKWMEqfwS9TOXj0xCrRj8u5IMBMVixR9BXX9248HLKj6jegb78QgAAqDTQZpmouO&X-Amz-Signature=1cabf1890f0534c55c3f491988a0d6df2568623c88494927119ed11a9186a8f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PQZFOLO%2F20260518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260518T034151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPkhCqrQbiEG7FYmP41bcyjCINWdXXZupfWe8Z5uwQYAiAovFNqx1XQMnzXlog%2Fgu8bwgpg8qKnOcH%2FvRAVSt76pCqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIME0S%2FmCmqLlxXuG3GKtwDr4cugizkN3wt3ZGXzENMdUF4pISjL269gTau%2BGMGa4v84On9JQAiDjMN4MynxDZFvR50pdJ5dHdlzDc7fMfORpEeKaUqPGoLhdrf6Bc6NpeYUQU6PlEEsNstX5j6YmrGZtNxKu%2F%2BUl2HgHSqLvcGM0eReWaIdinOhnaayN5V12B7HT78ry5vp5dPRS54ADpWUHMXwOmfb65Zu4NSS1yJgyKxrOLebdaug7K56TO102gjmdIqT1iQMKDaM4D5vHcVFMDO%2Bulu5zg23I5EetE0tKUos9tndVH%2Fzhz%2BxWOSbRwJ4qeyw1%2F0QujK9nDy5I%2Bayrx%2FLnmt1RgUHTrlaXCVU05g4i4NVKw3VJ9BCM8xfBuM6qyJT%2BP2KpwBz1ELjZgaOhiDymorEDAK0M7o39PpEaLnMiLuN5%2BN57Xd1yc8BsARiHeJtawOYWB7R0IitiOfu5eIh4u2KEH6dyF8YXZTVnvvoPhYPG5Bf%2BXHoqjmmuBkiqEHhCkt%2Brm0QwAARL04XDpcV3P%2B%2FAGSYeX9TVXjbiaR%2BP66eDJZXe4uGXbrVGbnE0PnC4DxMFmQWAyWGkodF1bCM5WJFe4d7OxmQdmk0RWBcngKB3%2Ffjb%2B9Jsp8qY%2F49ndNGntrRMgmiGIwgJSq0AY6pgGaBTQj2LcIJVNYVrwydAKtXqlqXf%2FzxN4gLbO6%2FaW53tgrxKMtF5Tu%2BxC0rNXpU1nFQsa1N5g%2Fwu1cRyuil%2F8D99%2F2kH8hDe3Rv%2BdL6IrVxcLFBd32%2BqFtN6d8HY5T9lAkgCt1eoAwjU8OOySJDGy3pllIulCQIKWMEqfwS9TOXj0xCrRj8u5IMBMVixR9BXX9248HLKj6jegb78QgAAqDTQZpmouO&X-Amz-Signature=b03a271360eec855c57f13e75cd0ca7e3e8262d1dbfdd68e705c0dccdcbac7cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PQZFOLO%2F20260518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260518T034151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPkhCqrQbiEG7FYmP41bcyjCINWdXXZupfWe8Z5uwQYAiAovFNqx1XQMnzXlog%2Fgu8bwgpg8qKnOcH%2FvRAVSt76pCqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIME0S%2FmCmqLlxXuG3GKtwDr4cugizkN3wt3ZGXzENMdUF4pISjL269gTau%2BGMGa4v84On9JQAiDjMN4MynxDZFvR50pdJ5dHdlzDc7fMfORpEeKaUqPGoLhdrf6Bc6NpeYUQU6PlEEsNstX5j6YmrGZtNxKu%2F%2BUl2HgHSqLvcGM0eReWaIdinOhnaayN5V12B7HT78ry5vp5dPRS54ADpWUHMXwOmfb65Zu4NSS1yJgyKxrOLebdaug7K56TO102gjmdIqT1iQMKDaM4D5vHcVFMDO%2Bulu5zg23I5EetE0tKUos9tndVH%2Fzhz%2BxWOSbRwJ4qeyw1%2F0QujK9nDy5I%2Bayrx%2FLnmt1RgUHTrlaXCVU05g4i4NVKw3VJ9BCM8xfBuM6qyJT%2BP2KpwBz1ELjZgaOhiDymorEDAK0M7o39PpEaLnMiLuN5%2BN57Xd1yc8BsARiHeJtawOYWB7R0IitiOfu5eIh4u2KEH6dyF8YXZTVnvvoPhYPG5Bf%2BXHoqjmmuBkiqEHhCkt%2Brm0QwAARL04XDpcV3P%2B%2FAGSYeX9TVXjbiaR%2BP66eDJZXe4uGXbrVGbnE0PnC4DxMFmQWAyWGkodF1bCM5WJFe4d7OxmQdmk0RWBcngKB3%2Ffjb%2B9Jsp8qY%2F49ndNGntrRMgmiGIwgJSq0AY6pgGaBTQj2LcIJVNYVrwydAKtXqlqXf%2FzxN4gLbO6%2FaW53tgrxKMtF5Tu%2BxC0rNXpU1nFQsa1N5g%2Fwu1cRyuil%2F8D99%2F2kH8hDe3Rv%2BdL6IrVxcLFBd32%2BqFtN6d8HY5T9lAkgCt1eoAwjU8OOySJDGy3pllIulCQIKWMEqfwS9TOXj0xCrRj8u5IMBMVixR9BXX9248HLKj6jegb78QgAAqDTQZpmouO&X-Amz-Signature=df29d6ddee367c9e28d5a617c86926cf26ff3885290f9a28347882ddfef8f0c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PQZFOLO%2F20260518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260518T034151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPkhCqrQbiEG7FYmP41bcyjCINWdXXZupfWe8Z5uwQYAiAovFNqx1XQMnzXlog%2Fgu8bwgpg8qKnOcH%2FvRAVSt76pCqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIME0S%2FmCmqLlxXuG3GKtwDr4cugizkN3wt3ZGXzENMdUF4pISjL269gTau%2BGMGa4v84On9JQAiDjMN4MynxDZFvR50pdJ5dHdlzDc7fMfORpEeKaUqPGoLhdrf6Bc6NpeYUQU6PlEEsNstX5j6YmrGZtNxKu%2F%2BUl2HgHSqLvcGM0eReWaIdinOhnaayN5V12B7HT78ry5vp5dPRS54ADpWUHMXwOmfb65Zu4NSS1yJgyKxrOLebdaug7K56TO102gjmdIqT1iQMKDaM4D5vHcVFMDO%2Bulu5zg23I5EetE0tKUos9tndVH%2Fzhz%2BxWOSbRwJ4qeyw1%2F0QujK9nDy5I%2Bayrx%2FLnmt1RgUHTrlaXCVU05g4i4NVKw3VJ9BCM8xfBuM6qyJT%2BP2KpwBz1ELjZgaOhiDymorEDAK0M7o39PpEaLnMiLuN5%2BN57Xd1yc8BsARiHeJtawOYWB7R0IitiOfu5eIh4u2KEH6dyF8YXZTVnvvoPhYPG5Bf%2BXHoqjmmuBkiqEHhCkt%2Brm0QwAARL04XDpcV3P%2B%2FAGSYeX9TVXjbiaR%2BP66eDJZXe4uGXbrVGbnE0PnC4DxMFmQWAyWGkodF1bCM5WJFe4d7OxmQdmk0RWBcngKB3%2Ffjb%2B9Jsp8qY%2F49ndNGntrRMgmiGIwgJSq0AY6pgGaBTQj2LcIJVNYVrwydAKtXqlqXf%2FzxN4gLbO6%2FaW53tgrxKMtF5Tu%2BxC0rNXpU1nFQsa1N5g%2Fwu1cRyuil%2F8D99%2F2kH8hDe3Rv%2BdL6IrVxcLFBd32%2BqFtN6d8HY5T9lAkgCt1eoAwjU8OOySJDGy3pllIulCQIKWMEqfwS9TOXj0xCrRj8u5IMBMVixR9BXX9248HLKj6jegb78QgAAqDTQZpmouO&X-Amz-Signature=4897a22e26fe9696036676fc9780e684587ccd9a185ad0e299b731936b45a47a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XODYNDSE%2F20260518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260518T034151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBLJ5VXYwYI1imqsXXqpGVA%2BepQLjTdaw%2Fn24oXHMgOfAiAQoXJbdxowFDWC%2BwMZ440%2FRNGaBCxymqcrmg3FEW0g8SqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjSpL0R26pKEi0YNcKtwD89oDSX4liVDSOl1DAQN0FKCnkgha2K0yVcLTXTtpMTolkVmBienGEKOGHiJjx3gX7r94ZAHj7mYNbzsxfbhx7f20o7LGb3CD2%2Fc03czQXjbYhZkOt0l8geMzELtiX5HJUlTlltdFsnjmw4DuCXaae9b36VL8pWqsTeHd50E4Ew%2Bn9ya8i%2B4H05j3tWvzuRUBa3VkRyzxEG26bhC4pW4fPNeNksXGkVwXgQJToYS9BqhYc8L1qj%2B8zqwTCX3%2BXf8mgW3WYV69sBo0FAqhVPG1oblxWAvIDnsBEsI86LVMgPkYmK6mcViRRdemrwxfVk9lqw1rCSx9xmAykdhSKCZg2ndMdDpOrcfcNZNvoKVwoGwsJQ8ty6KCkA%2FDkII25etXyY6kWPCPHm2dWxysAgKYjl6dzpPcPZYBEwwKLglNNLzZ7u2rFZiT0f0zOk6N7F2e4o4b%2FDfs3H05WJyVLKz90V4vLd53h9diMkfequicrr6%2F%2FEWdy9pTyadZpU9CmSB7%2B0f%2BAyqXI3IsqNdIklxtm%2FbzW90JZsk9Q7nYITaiS6Y%2BJlPQprOZbe0kl1yskCoSIdAzYC8Ab5YcOgaveVSmCTBSH3cv61p1WNs9iAuLgvd4WhHAerlGLcRrFPcwyO6p0AY6pgGWRjOa4zkwnGt%2F3NepjhCkVvD%2FWRZR7vrdn2I1wFHURN88ywj3kfCw4zly7BRdoKxexvs8KMluXkrl8C0CMPwYpDPsSpAqOvuhz0cwUOwdNYlgkGYafp9H15rSDPNDaQ359I9nAP0TcTcnLTA5nzrvDA7rtgExbWQiEYJMYQ%2BA9Qr8Bcwc5EhHBl9Ez%2BQxR32Zhw2ah4Gljadl8N4PSfsAV2cPMFIi&X-Amz-Signature=9ea7c5c092a458ccdaf1d6869c7538c4c6b6ff4f04cffd3c21a6a6e8c6dcf6c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

