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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCV3ELPD%2F20251221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251221T011052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIHrQyfBGejHDWFeyGf1eIBb%2F8oYdeDhSymt1tp7f8My4AiEA9qCq30gG%2FvuFoCjEs%2B%2BrsJAb6%2B07hkyIRfcYpTk4ytAqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNtrv1m%2FbJJKOaXcfircAxGeDdosI5tC4%2FWiyFvj%2B0ubVmWmmLGwJNYdlLIZKuYTxnoP2qT%2BuNq4fU2OJ4m%2BjPk1BxQZgDb0dUqwxY1LaGeeRzJrJfoCBf7DaXxenprI1zCeDvvWwHZ5jhf%2F97T7WpSpbm8CzX2N576CxvMa6dKDfnYp2Jg8uk5IE3d7jtWcvKlBOR8Ced86Iy%2Fn7lP%2Fsx%2BAdGNS8mexbDFmO6PneJPhGKHYqFleQyFq1vSa23W4Wkgmvt1CQpCm23d%2FY4JJQd8Tn%2BWYhVbjOv%2FM6afzDgC9LhuTH%2BKWfhbX0%2BIOKfBknD%2FhSp8PFoT5hVIKbqtIncUxB8PWjASk1GyyXb%2F8HlqsmNHfmehIoM5N31eNwGDeztInWa%2F4qxEsZwQunyAxDPE01OoxJjLY9x3mdiQmTitryNi2vXYW5VlB7kkOKG6MmoF%2FcFMC5jXWsJIBtSwNjFMC1hpEcnIpwB8z4SOPPxYaYbAx0351vDVTgMrqSUdX2SHW4omVphabAzN8j9mMkZmAUpj2J3p2IqFME%2BOfO6fxR8eVplhBjx5MY9oIapt%2F0yVjyPnJfOCE13y%2FyXr1aM%2BIw%2BQBxmdWgIh9b07l9B%2F5%2BC%2FH6yCv1Hj45qDf1hvmWSuQMrkGVYcD3N7FMJvnnMoGOqUBIvW8CuJYYer8DK%2FhYiBYyI%2F%2BR8Mhy1%2Fvmg%2BA0fqCANnd5Hh%2BS%2Frj3LUOl%2FsHM8bBDWMZXixgN%2BfNUwlHf0cwA2MIQMLJm8JzhsGSVGcoIg23s8zCwNFvUpEEsE5OFtQ18g7TVEatS%2FP3zmH6BV2qXs9RuwleXjAHu9ESoMTrxlgQODomS%2B%2BEYg3WxFDP2RJbpIREqCFb2C%2BdBkqFGop1NDW%2Fjz3B&X-Amz-Signature=756349ba5b86bd3f36c46a29c4700bd97e4a62acdf0c3ed899bef6fe59380508&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ2YNTC7%2F20251221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251221T011052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQDNYjBaHv8ywneKhwnHzxZLgxapDpkd%2FN0vJ%2FuHfAr6ZwIgZeFIdX3xF7ZtkNL5bMftisT27DkvNjnjJ1BqFDyBjbMqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOhK3PnZqmBjvGKlRyrcA8BUW8daWPA6LQhHE%2BrZQ1zso%2FAg9V%2Bev%2FzC%2FV73vDbBOTRrR%2FMOlkXFSFH5M3vNJg8VzVTmJYI9Kqt3AVGHdgXQkLSlaGGTZFltQaQ3qUJlbFAZd8hnZ6cJLIst5U0lKUhv0o6iIkFCIvlkT5SDZy4FI4I6OyjJNDd6%2FyRiKYzZTE6%2F36dGuqvvzKJNQkCDzHQRQFZIZRJ%2FIjc2lFOzQo3WmT8WSAzdO1%2BDxS9oiYthLmS5%2BnhZXxgWjH1rn8vxRhpG%2FvUGYNzjbHHbfjEV5OcfZ%2BpA9LRfunVywRIIzdd02yUxWxO%2FHJaucp8naac0At%2BP28fL4phkTnLRft9fCxzk0xZEEI2WmexbBl6lUaY7CxLYuYdGwf8V3pMYfvlWbh1BPGNPrdhu6o%2BWOui8SFgTiydf4aDEIi5GLBxrF1a8pdqoJQSXlsoAjDy1h2cwNrGM3bq%2BRxkHTqw%2BE700exh42CLEwFO3CPxkxsY%2B9GUmBhRtVfXLXv0%2BUuOv8g3Q3hPIT6GJ5Doo4DnDlVKN5SuZRF80FiyUbkxmD5IMWm0zgxJTCo8uYm0m3qGjzYJI0b18vsJSBKlE4yBCYlDLtP60hN%2BLX5bpwC26etSUfGZUS8r%2FfuiCYDjOt%2FVUMJfnnMoGOqUBS3bn4baEYS%2FURtX1j3dwShVlIRoKKC%2BH6S3pV9gj%2FA7cM%2FC8QKAMs91jlh4js1Cnx%2B5NUWCrSnYZdio9HTEZuSlxbPOMKrCD5WPRfZV9kyLzkyGfHSVq2kFu5%2BuJfMf5YSZifwE%2BjpfJaD7SVsI2ODRWmfjtSwIQWgNmbhjMTS1naTmkUyTHljdB6dlSK2YacXcdlXl4Cgic55iIk2CxTlUf%2FNUc&X-Amz-Signature=bf2826744ed17d119989f694951de62de015e69af49a11aeebe2c41a87cd6ee6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ2YNTC7%2F20251221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251221T011052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQDNYjBaHv8ywneKhwnHzxZLgxapDpkd%2FN0vJ%2FuHfAr6ZwIgZeFIdX3xF7ZtkNL5bMftisT27DkvNjnjJ1BqFDyBjbMqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOhK3PnZqmBjvGKlRyrcA8BUW8daWPA6LQhHE%2BrZQ1zso%2FAg9V%2Bev%2FzC%2FV73vDbBOTRrR%2FMOlkXFSFH5M3vNJg8VzVTmJYI9Kqt3AVGHdgXQkLSlaGGTZFltQaQ3qUJlbFAZd8hnZ6cJLIst5U0lKUhv0o6iIkFCIvlkT5SDZy4FI4I6OyjJNDd6%2FyRiKYzZTE6%2F36dGuqvvzKJNQkCDzHQRQFZIZRJ%2FIjc2lFOzQo3WmT8WSAzdO1%2BDxS9oiYthLmS5%2BnhZXxgWjH1rn8vxRhpG%2FvUGYNzjbHHbfjEV5OcfZ%2BpA9LRfunVywRIIzdd02yUxWxO%2FHJaucp8naac0At%2BP28fL4phkTnLRft9fCxzk0xZEEI2WmexbBl6lUaY7CxLYuYdGwf8V3pMYfvlWbh1BPGNPrdhu6o%2BWOui8SFgTiydf4aDEIi5GLBxrF1a8pdqoJQSXlsoAjDy1h2cwNrGM3bq%2BRxkHTqw%2BE700exh42CLEwFO3CPxkxsY%2B9GUmBhRtVfXLXv0%2BUuOv8g3Q3hPIT6GJ5Doo4DnDlVKN5SuZRF80FiyUbkxmD5IMWm0zgxJTCo8uYm0m3qGjzYJI0b18vsJSBKlE4yBCYlDLtP60hN%2BLX5bpwC26etSUfGZUS8r%2FfuiCYDjOt%2FVUMJfnnMoGOqUBS3bn4baEYS%2FURtX1j3dwShVlIRoKKC%2BH6S3pV9gj%2FA7cM%2FC8QKAMs91jlh4js1Cnx%2B5NUWCrSnYZdio9HTEZuSlxbPOMKrCD5WPRfZV9kyLzkyGfHSVq2kFu5%2BuJfMf5YSZifwE%2BjpfJaD7SVsI2ODRWmfjtSwIQWgNmbhjMTS1naTmkUyTHljdB6dlSK2YacXcdlXl4Cgic55iIk2CxTlUf%2FNUc&X-Amz-Signature=a0cccf6f297c73b249265d344efa196adbcd03fb13b2e4c2c8990cf329341faf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ2YNTC7%2F20251221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251221T011052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQDNYjBaHv8ywneKhwnHzxZLgxapDpkd%2FN0vJ%2FuHfAr6ZwIgZeFIdX3xF7ZtkNL5bMftisT27DkvNjnjJ1BqFDyBjbMqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOhK3PnZqmBjvGKlRyrcA8BUW8daWPA6LQhHE%2BrZQ1zso%2FAg9V%2Bev%2FzC%2FV73vDbBOTRrR%2FMOlkXFSFH5M3vNJg8VzVTmJYI9Kqt3AVGHdgXQkLSlaGGTZFltQaQ3qUJlbFAZd8hnZ6cJLIst5U0lKUhv0o6iIkFCIvlkT5SDZy4FI4I6OyjJNDd6%2FyRiKYzZTE6%2F36dGuqvvzKJNQkCDzHQRQFZIZRJ%2FIjc2lFOzQo3WmT8WSAzdO1%2BDxS9oiYthLmS5%2BnhZXxgWjH1rn8vxRhpG%2FvUGYNzjbHHbfjEV5OcfZ%2BpA9LRfunVywRIIzdd02yUxWxO%2FHJaucp8naac0At%2BP28fL4phkTnLRft9fCxzk0xZEEI2WmexbBl6lUaY7CxLYuYdGwf8V3pMYfvlWbh1BPGNPrdhu6o%2BWOui8SFgTiydf4aDEIi5GLBxrF1a8pdqoJQSXlsoAjDy1h2cwNrGM3bq%2BRxkHTqw%2BE700exh42CLEwFO3CPxkxsY%2B9GUmBhRtVfXLXv0%2BUuOv8g3Q3hPIT6GJ5Doo4DnDlVKN5SuZRF80FiyUbkxmD5IMWm0zgxJTCo8uYm0m3qGjzYJI0b18vsJSBKlE4yBCYlDLtP60hN%2BLX5bpwC26etSUfGZUS8r%2FfuiCYDjOt%2FVUMJfnnMoGOqUBS3bn4baEYS%2FURtX1j3dwShVlIRoKKC%2BH6S3pV9gj%2FA7cM%2FC8QKAMs91jlh4js1Cnx%2B5NUWCrSnYZdio9HTEZuSlxbPOMKrCD5WPRfZV9kyLzkyGfHSVq2kFu5%2BuJfMf5YSZifwE%2BjpfJaD7SVsI2ODRWmfjtSwIQWgNmbhjMTS1naTmkUyTHljdB6dlSK2YacXcdlXl4Cgic55iIk2CxTlUf%2FNUc&X-Amz-Signature=74920bd269fe4a8a9b9331131c4ec459ed8867c28c8c2a3191c2bf29c1eefe09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ2YNTC7%2F20251221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251221T011052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQDNYjBaHv8ywneKhwnHzxZLgxapDpkd%2FN0vJ%2FuHfAr6ZwIgZeFIdX3xF7ZtkNL5bMftisT27DkvNjnjJ1BqFDyBjbMqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOhK3PnZqmBjvGKlRyrcA8BUW8daWPA6LQhHE%2BrZQ1zso%2FAg9V%2Bev%2FzC%2FV73vDbBOTRrR%2FMOlkXFSFH5M3vNJg8VzVTmJYI9Kqt3AVGHdgXQkLSlaGGTZFltQaQ3qUJlbFAZd8hnZ6cJLIst5U0lKUhv0o6iIkFCIvlkT5SDZy4FI4I6OyjJNDd6%2FyRiKYzZTE6%2F36dGuqvvzKJNQkCDzHQRQFZIZRJ%2FIjc2lFOzQo3WmT8WSAzdO1%2BDxS9oiYthLmS5%2BnhZXxgWjH1rn8vxRhpG%2FvUGYNzjbHHbfjEV5OcfZ%2BpA9LRfunVywRIIzdd02yUxWxO%2FHJaucp8naac0At%2BP28fL4phkTnLRft9fCxzk0xZEEI2WmexbBl6lUaY7CxLYuYdGwf8V3pMYfvlWbh1BPGNPrdhu6o%2BWOui8SFgTiydf4aDEIi5GLBxrF1a8pdqoJQSXlsoAjDy1h2cwNrGM3bq%2BRxkHTqw%2BE700exh42CLEwFO3CPxkxsY%2B9GUmBhRtVfXLXv0%2BUuOv8g3Q3hPIT6GJ5Doo4DnDlVKN5SuZRF80FiyUbkxmD5IMWm0zgxJTCo8uYm0m3qGjzYJI0b18vsJSBKlE4yBCYlDLtP60hN%2BLX5bpwC26etSUfGZUS8r%2FfuiCYDjOt%2FVUMJfnnMoGOqUBS3bn4baEYS%2FURtX1j3dwShVlIRoKKC%2BH6S3pV9gj%2FA7cM%2FC8QKAMs91jlh4js1Cnx%2B5NUWCrSnYZdio9HTEZuSlxbPOMKrCD5WPRfZV9kyLzkyGfHSVq2kFu5%2BuJfMf5YSZifwE%2BjpfJaD7SVsI2ODRWmfjtSwIQWgNmbhjMTS1naTmkUyTHljdB6dlSK2YacXcdlXl4Cgic55iIk2CxTlUf%2FNUc&X-Amz-Signature=2a173954f537ea4d8b3096214d7405d76d1c001a2cc5903ab28c8b10ded41de8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ2YNTC7%2F20251221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251221T011052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQDNYjBaHv8ywneKhwnHzxZLgxapDpkd%2FN0vJ%2FuHfAr6ZwIgZeFIdX3xF7ZtkNL5bMftisT27DkvNjnjJ1BqFDyBjbMqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOhK3PnZqmBjvGKlRyrcA8BUW8daWPA6LQhHE%2BrZQ1zso%2FAg9V%2Bev%2FzC%2FV73vDbBOTRrR%2FMOlkXFSFH5M3vNJg8VzVTmJYI9Kqt3AVGHdgXQkLSlaGGTZFltQaQ3qUJlbFAZd8hnZ6cJLIst5U0lKUhv0o6iIkFCIvlkT5SDZy4FI4I6OyjJNDd6%2FyRiKYzZTE6%2F36dGuqvvzKJNQkCDzHQRQFZIZRJ%2FIjc2lFOzQo3WmT8WSAzdO1%2BDxS9oiYthLmS5%2BnhZXxgWjH1rn8vxRhpG%2FvUGYNzjbHHbfjEV5OcfZ%2BpA9LRfunVywRIIzdd02yUxWxO%2FHJaucp8naac0At%2BP28fL4phkTnLRft9fCxzk0xZEEI2WmexbBl6lUaY7CxLYuYdGwf8V3pMYfvlWbh1BPGNPrdhu6o%2BWOui8SFgTiydf4aDEIi5GLBxrF1a8pdqoJQSXlsoAjDy1h2cwNrGM3bq%2BRxkHTqw%2BE700exh42CLEwFO3CPxkxsY%2B9GUmBhRtVfXLXv0%2BUuOv8g3Q3hPIT6GJ5Doo4DnDlVKN5SuZRF80FiyUbkxmD5IMWm0zgxJTCo8uYm0m3qGjzYJI0b18vsJSBKlE4yBCYlDLtP60hN%2BLX5bpwC26etSUfGZUS8r%2FfuiCYDjOt%2FVUMJfnnMoGOqUBS3bn4baEYS%2FURtX1j3dwShVlIRoKKC%2BH6S3pV9gj%2FA7cM%2FC8QKAMs91jlh4js1Cnx%2B5NUWCrSnYZdio9HTEZuSlxbPOMKrCD5WPRfZV9kyLzkyGfHSVq2kFu5%2BuJfMf5YSZifwE%2BjpfJaD7SVsI2ODRWmfjtSwIQWgNmbhjMTS1naTmkUyTHljdB6dlSK2YacXcdlXl4Cgic55iIk2CxTlUf%2FNUc&X-Amz-Signature=a145b6c04d654f54514bd05024c96c44bd217fc88ae97c1dd080d4e7fbcfce92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCV3ELPD%2F20251221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251221T011052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIHrQyfBGejHDWFeyGf1eIBb%2F8oYdeDhSymt1tp7f8My4AiEA9qCq30gG%2FvuFoCjEs%2B%2BrsJAb6%2B07hkyIRfcYpTk4ytAqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNtrv1m%2FbJJKOaXcfircAxGeDdosI5tC4%2FWiyFvj%2B0ubVmWmmLGwJNYdlLIZKuYTxnoP2qT%2BuNq4fU2OJ4m%2BjPk1BxQZgDb0dUqwxY1LaGeeRzJrJfoCBf7DaXxenprI1zCeDvvWwHZ5jhf%2F97T7WpSpbm8CzX2N576CxvMa6dKDfnYp2Jg8uk5IE3d7jtWcvKlBOR8Ced86Iy%2Fn7lP%2Fsx%2BAdGNS8mexbDFmO6PneJPhGKHYqFleQyFq1vSa23W4Wkgmvt1CQpCm23d%2FY4JJQd8Tn%2BWYhVbjOv%2FM6afzDgC9LhuTH%2BKWfhbX0%2BIOKfBknD%2FhSp8PFoT5hVIKbqtIncUxB8PWjASk1GyyXb%2F8HlqsmNHfmehIoM5N31eNwGDeztInWa%2F4qxEsZwQunyAxDPE01OoxJjLY9x3mdiQmTitryNi2vXYW5VlB7kkOKG6MmoF%2FcFMC5jXWsJIBtSwNjFMC1hpEcnIpwB8z4SOPPxYaYbAx0351vDVTgMrqSUdX2SHW4omVphabAzN8j9mMkZmAUpj2J3p2IqFME%2BOfO6fxR8eVplhBjx5MY9oIapt%2F0yVjyPnJfOCE13y%2FyXr1aM%2BIw%2BQBxmdWgIh9b07l9B%2F5%2BC%2FH6yCv1Hj45qDf1hvmWSuQMrkGVYcD3N7FMJvnnMoGOqUBIvW8CuJYYer8DK%2FhYiBYyI%2F%2BR8Mhy1%2Fvmg%2BA0fqCANnd5Hh%2BS%2Frj3LUOl%2FsHM8bBDWMZXixgN%2BfNUwlHf0cwA2MIQMLJm8JzhsGSVGcoIg23s8zCwNFvUpEEsE5OFtQ18g7TVEatS%2FP3zmH6BV2qXs9RuwleXjAHu9ESoMTrxlgQODomS%2B%2BEYg3WxFDP2RJbpIREqCFb2C%2BdBkqFGop1NDW%2Fjz3B&X-Amz-Signature=f0c533b93dd8a781e2f07c3a754ac0ac735cf40aea63e32ce3eea0346cb6c79c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

