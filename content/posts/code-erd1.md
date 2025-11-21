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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675OHQJN7%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T010157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIF0PRNoubu%2BIl4p2rte345kVVm59D9c8VwgjdJhm6c3OAiB16ztW06xPX2QvNWk9qgklQ9%2BYcX7towX5xMN1NzdwAir%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMlF3hLFOwBKLirRJTKtwDC1qRvwTEUpABL5%2FKGTKAu8bTxklTqXkjxV7zaPLPdaEfB%2FU86%2Fb0H6Ug5zIUJ3GLKhqDgezzvLKU1wnZpMqywueVjBpIqyyx%2FQiWByf%2FJbVTeHCOm5sebPq10%2FP802wDmUrpX4t8V0HjzcOfy4enHHMtOiKgO8yvWsYcDlhZd11KQvSR1x8Qb%2FB1cW0WJS5jtCyyTGitVqSnaNA7wPSL35s6tLGhIAK%2BLN4YEnqb%2BXSkNqwDMUFlfvLz%2Bacmm6pQ4BNFaEz95mbhC8o85eFseR1538fdCo9DkKvZEZ4B3wdLJsgeoYHdWRWyYH%2FEosLDNDV3ouO0onrr8lTlWOAVZSLTqy7aSUSHUu9%2BTtIK8Aq4DCR%2FdzIc4yneXClwVAXOIn2rOsc58DsEhaROXHJUCQ9CGK2JaAZjvar8NjaNz%2BFT5jn80Gux%2BJaZhwemRn9c4m5LI09bu%2F2PORMyhPMv8Rb3lXkGM45zTyn7f5GKubqQl3ksHivfNgfmQikTt2SteIqhU0BxKdQrTEOT3LqbnfU%2BKpQUJILdtTKB2UqeGviftqNDwy1vODCjYw5LQ4ckUzOk7aTCjUdzELikrzbAbk7gUDfuxQGLS%2FYNtGw6vAACAPsiukWE0q9gJ8swl%2Bj%2ByAY6pgEShF6PQ9%2F0IenKRouXw2OXBjEnTbAtTvGMsJd1Wsn61%2FFRBa9e7Tz%2F518OFl5BaBaFb%2FpTijJRNizRMO3HvDV0XLmIHNMGG1mFwmT2OntR7KjdOVLyGZq5wVhpMzRwqHSawCl%2F1v%2FaZ41w6EpoY2hqN7%2BiFGT8YBIQmtpTg78PEU%2FYFcdvldlXd%2FU9XtVNt%2FEdurEFVFv5YPoJdM7Mg4yam4c09%2BOz&X-Amz-Signature=ecc940a3790b53743536fd91ba31f4bb951e44a58098d32c4d9964077f2a2e09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMKSQNNS%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T010157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQD0T4QkewRkWuyZ6exMCP4GzVf2s7aDk%2FmF9m%2F7ScLSjAIgZ9JzmlebjdzP5eena1g4kNOddT8xZGkVm30kR96%2FlF8q%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDDOMfUlW1pEncR97OyrcAx%2BEIvU82JoLzWat%2Foz2qoEFcxvLZmM0TTgn3kFizr%2B1DlfZyON0SPt7HJA0Npa5%2BgzIwEVA5oPF63h3zGV%2FJf5n00z9ltIsk86vgVy4Sd2mhf729wKoJ9RL6HX9wFCvyklU8%2B2veOW9gKvlbmO3V28zFE0VMySMuSMG71EKDDCVQ9Ed32Qs%2BdbuQ4QotQ3%2BtR61kQmVFlIKGm8mc6rm19n3J6Umc3q7ChNjk1%2B8H7YyyoMkU2JCZDefVtJRussQoUNHJ6SLFyRfo0g32wRfM%2FDlKOu2P0C4yWdrajvnPp9uJEeF4ztHr5QREJt4xemhapN2sb8QyEUMdQcy2POgm1aFCwGm4K8eZZQEfKGTSeeq0zvh4syaDVt30xDOEOqx5iGiP74LqsOnDaeKCkTKXecOdThyZfxJYS52S7SoJ8g1AyuC88dqJHJnBIuYSJ3vzdoJp6awo1TlgrqthHTxHR%2BBrxK%2BTwzivEDOhQHmG8N8SyPbuHMm3FkzF%2FrB2gsqe7NCmQLnuPAl3bzdo%2BV32GF95P%2BtoBnhT3yjX9oBbIADY%2B8Ujtuk%2FCMN%2F7E8A2NYM2tvZ3RKyv4ayQMHxrrd0mSCPCJrTKTmZOlZPdpMNPXDxJVsaUeUnuVs7fsJMIrp%2FsgGOqUBU9aIbmUBfizGBMFBpSrxPzOIJHBubmx%2FDThRD6Z1KY0uFLHGRgl6Ef0LlhMvL6pO0CNgMyQnAAl%2FIR%2BFtZap9%2F%2BrLTuVSdtg9Up4gYFX55ywWxOzMvxH8ixG5BLI%2BV2pdHzMaYS0zcdZAuth1UHxPkw67C%2B0sbhGw4fKYooYA0AjzgJF0vcKnSNASFCZfeVcUTgwyZyZYN5FDyywFvNe0YLhUj%2F2&X-Amz-Signature=d6c4c79b10bb8d2cfd1f44553314626b97650cc0f9f225d70cc45b47e9873217&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMKSQNNS%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T010157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQD0T4QkewRkWuyZ6exMCP4GzVf2s7aDk%2FmF9m%2F7ScLSjAIgZ9JzmlebjdzP5eena1g4kNOddT8xZGkVm30kR96%2FlF8q%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDDOMfUlW1pEncR97OyrcAx%2BEIvU82JoLzWat%2Foz2qoEFcxvLZmM0TTgn3kFizr%2B1DlfZyON0SPt7HJA0Npa5%2BgzIwEVA5oPF63h3zGV%2FJf5n00z9ltIsk86vgVy4Sd2mhf729wKoJ9RL6HX9wFCvyklU8%2B2veOW9gKvlbmO3V28zFE0VMySMuSMG71EKDDCVQ9Ed32Qs%2BdbuQ4QotQ3%2BtR61kQmVFlIKGm8mc6rm19n3J6Umc3q7ChNjk1%2B8H7YyyoMkU2JCZDefVtJRussQoUNHJ6SLFyRfo0g32wRfM%2FDlKOu2P0C4yWdrajvnPp9uJEeF4ztHr5QREJt4xemhapN2sb8QyEUMdQcy2POgm1aFCwGm4K8eZZQEfKGTSeeq0zvh4syaDVt30xDOEOqx5iGiP74LqsOnDaeKCkTKXecOdThyZfxJYS52S7SoJ8g1AyuC88dqJHJnBIuYSJ3vzdoJp6awo1TlgrqthHTxHR%2BBrxK%2BTwzivEDOhQHmG8N8SyPbuHMm3FkzF%2FrB2gsqe7NCmQLnuPAl3bzdo%2BV32GF95P%2BtoBnhT3yjX9oBbIADY%2B8Ujtuk%2FCMN%2F7E8A2NYM2tvZ3RKyv4ayQMHxrrd0mSCPCJrTKTmZOlZPdpMNPXDxJVsaUeUnuVs7fsJMIrp%2FsgGOqUBU9aIbmUBfizGBMFBpSrxPzOIJHBubmx%2FDThRD6Z1KY0uFLHGRgl6Ef0LlhMvL6pO0CNgMyQnAAl%2FIR%2BFtZap9%2F%2BrLTuVSdtg9Up4gYFX55ywWxOzMvxH8ixG5BLI%2BV2pdHzMaYS0zcdZAuth1UHxPkw67C%2B0sbhGw4fKYooYA0AjzgJF0vcKnSNASFCZfeVcUTgwyZyZYN5FDyywFvNe0YLhUj%2F2&X-Amz-Signature=b04d9f7c97411b4238fb4e5cbf094b9112ad5176aac9c01a7fe7f8f03f2d9551&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMKSQNNS%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T010157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQD0T4QkewRkWuyZ6exMCP4GzVf2s7aDk%2FmF9m%2F7ScLSjAIgZ9JzmlebjdzP5eena1g4kNOddT8xZGkVm30kR96%2FlF8q%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDDOMfUlW1pEncR97OyrcAx%2BEIvU82JoLzWat%2Foz2qoEFcxvLZmM0TTgn3kFizr%2B1DlfZyON0SPt7HJA0Npa5%2BgzIwEVA5oPF63h3zGV%2FJf5n00z9ltIsk86vgVy4Sd2mhf729wKoJ9RL6HX9wFCvyklU8%2B2veOW9gKvlbmO3V28zFE0VMySMuSMG71EKDDCVQ9Ed32Qs%2BdbuQ4QotQ3%2BtR61kQmVFlIKGm8mc6rm19n3J6Umc3q7ChNjk1%2B8H7YyyoMkU2JCZDefVtJRussQoUNHJ6SLFyRfo0g32wRfM%2FDlKOu2P0C4yWdrajvnPp9uJEeF4ztHr5QREJt4xemhapN2sb8QyEUMdQcy2POgm1aFCwGm4K8eZZQEfKGTSeeq0zvh4syaDVt30xDOEOqx5iGiP74LqsOnDaeKCkTKXecOdThyZfxJYS52S7SoJ8g1AyuC88dqJHJnBIuYSJ3vzdoJp6awo1TlgrqthHTxHR%2BBrxK%2BTwzivEDOhQHmG8N8SyPbuHMm3FkzF%2FrB2gsqe7NCmQLnuPAl3bzdo%2BV32GF95P%2BtoBnhT3yjX9oBbIADY%2B8Ujtuk%2FCMN%2F7E8A2NYM2tvZ3RKyv4ayQMHxrrd0mSCPCJrTKTmZOlZPdpMNPXDxJVsaUeUnuVs7fsJMIrp%2FsgGOqUBU9aIbmUBfizGBMFBpSrxPzOIJHBubmx%2FDThRD6Z1KY0uFLHGRgl6Ef0LlhMvL6pO0CNgMyQnAAl%2FIR%2BFtZap9%2F%2BrLTuVSdtg9Up4gYFX55ywWxOzMvxH8ixG5BLI%2BV2pdHzMaYS0zcdZAuth1UHxPkw67C%2B0sbhGw4fKYooYA0AjzgJF0vcKnSNASFCZfeVcUTgwyZyZYN5FDyywFvNe0YLhUj%2F2&X-Amz-Signature=f96911975af3c31580ccc82ea6919444e15c7e40aa357e740eb7b534e0bc0c6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMKSQNNS%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T010157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQD0T4QkewRkWuyZ6exMCP4GzVf2s7aDk%2FmF9m%2F7ScLSjAIgZ9JzmlebjdzP5eena1g4kNOddT8xZGkVm30kR96%2FlF8q%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDDOMfUlW1pEncR97OyrcAx%2BEIvU82JoLzWat%2Foz2qoEFcxvLZmM0TTgn3kFizr%2B1DlfZyON0SPt7HJA0Npa5%2BgzIwEVA5oPF63h3zGV%2FJf5n00z9ltIsk86vgVy4Sd2mhf729wKoJ9RL6HX9wFCvyklU8%2B2veOW9gKvlbmO3V28zFE0VMySMuSMG71EKDDCVQ9Ed32Qs%2BdbuQ4QotQ3%2BtR61kQmVFlIKGm8mc6rm19n3J6Umc3q7ChNjk1%2B8H7YyyoMkU2JCZDefVtJRussQoUNHJ6SLFyRfo0g32wRfM%2FDlKOu2P0C4yWdrajvnPp9uJEeF4ztHr5QREJt4xemhapN2sb8QyEUMdQcy2POgm1aFCwGm4K8eZZQEfKGTSeeq0zvh4syaDVt30xDOEOqx5iGiP74LqsOnDaeKCkTKXecOdThyZfxJYS52S7SoJ8g1AyuC88dqJHJnBIuYSJ3vzdoJp6awo1TlgrqthHTxHR%2BBrxK%2BTwzivEDOhQHmG8N8SyPbuHMm3FkzF%2FrB2gsqe7NCmQLnuPAl3bzdo%2BV32GF95P%2BtoBnhT3yjX9oBbIADY%2B8Ujtuk%2FCMN%2F7E8A2NYM2tvZ3RKyv4ayQMHxrrd0mSCPCJrTKTmZOlZPdpMNPXDxJVsaUeUnuVs7fsJMIrp%2FsgGOqUBU9aIbmUBfizGBMFBpSrxPzOIJHBubmx%2FDThRD6Z1KY0uFLHGRgl6Ef0LlhMvL6pO0CNgMyQnAAl%2FIR%2BFtZap9%2F%2BrLTuVSdtg9Up4gYFX55ywWxOzMvxH8ixG5BLI%2BV2pdHzMaYS0zcdZAuth1UHxPkw67C%2B0sbhGw4fKYooYA0AjzgJF0vcKnSNASFCZfeVcUTgwyZyZYN5FDyywFvNe0YLhUj%2F2&X-Amz-Signature=33ba653d1921b9a7b64234ae88061edbc56566f79083c703ac3bb20695e577cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMKSQNNS%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T010157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQD0T4QkewRkWuyZ6exMCP4GzVf2s7aDk%2FmF9m%2F7ScLSjAIgZ9JzmlebjdzP5eena1g4kNOddT8xZGkVm30kR96%2FlF8q%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDDOMfUlW1pEncR97OyrcAx%2BEIvU82JoLzWat%2Foz2qoEFcxvLZmM0TTgn3kFizr%2B1DlfZyON0SPt7HJA0Npa5%2BgzIwEVA5oPF63h3zGV%2FJf5n00z9ltIsk86vgVy4Sd2mhf729wKoJ9RL6HX9wFCvyklU8%2B2veOW9gKvlbmO3V28zFE0VMySMuSMG71EKDDCVQ9Ed32Qs%2BdbuQ4QotQ3%2BtR61kQmVFlIKGm8mc6rm19n3J6Umc3q7ChNjk1%2B8H7YyyoMkU2JCZDefVtJRussQoUNHJ6SLFyRfo0g32wRfM%2FDlKOu2P0C4yWdrajvnPp9uJEeF4ztHr5QREJt4xemhapN2sb8QyEUMdQcy2POgm1aFCwGm4K8eZZQEfKGTSeeq0zvh4syaDVt30xDOEOqx5iGiP74LqsOnDaeKCkTKXecOdThyZfxJYS52S7SoJ8g1AyuC88dqJHJnBIuYSJ3vzdoJp6awo1TlgrqthHTxHR%2BBrxK%2BTwzivEDOhQHmG8N8SyPbuHMm3FkzF%2FrB2gsqe7NCmQLnuPAl3bzdo%2BV32GF95P%2BtoBnhT3yjX9oBbIADY%2B8Ujtuk%2FCMN%2F7E8A2NYM2tvZ3RKyv4ayQMHxrrd0mSCPCJrTKTmZOlZPdpMNPXDxJVsaUeUnuVs7fsJMIrp%2FsgGOqUBU9aIbmUBfizGBMFBpSrxPzOIJHBubmx%2FDThRD6Z1KY0uFLHGRgl6Ef0LlhMvL6pO0CNgMyQnAAl%2FIR%2BFtZap9%2F%2BrLTuVSdtg9Up4gYFX55ywWxOzMvxH8ixG5BLI%2BV2pdHzMaYS0zcdZAuth1UHxPkw67C%2B0sbhGw4fKYooYA0AjzgJF0vcKnSNASFCZfeVcUTgwyZyZYN5FDyywFvNe0YLhUj%2F2&X-Amz-Signature=84c9a4c10e3029627e3da09298be5e62b531d5d7c9d5284a02ccd094ce54c0fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675OHQJN7%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T010157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIF0PRNoubu%2BIl4p2rte345kVVm59D9c8VwgjdJhm6c3OAiB16ztW06xPX2QvNWk9qgklQ9%2BYcX7towX5xMN1NzdwAir%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMlF3hLFOwBKLirRJTKtwDC1qRvwTEUpABL5%2FKGTKAu8bTxklTqXkjxV7zaPLPdaEfB%2FU86%2Fb0H6Ug5zIUJ3GLKhqDgezzvLKU1wnZpMqywueVjBpIqyyx%2FQiWByf%2FJbVTeHCOm5sebPq10%2FP802wDmUrpX4t8V0HjzcOfy4enHHMtOiKgO8yvWsYcDlhZd11KQvSR1x8Qb%2FB1cW0WJS5jtCyyTGitVqSnaNA7wPSL35s6tLGhIAK%2BLN4YEnqb%2BXSkNqwDMUFlfvLz%2Bacmm6pQ4BNFaEz95mbhC8o85eFseR1538fdCo9DkKvZEZ4B3wdLJsgeoYHdWRWyYH%2FEosLDNDV3ouO0onrr8lTlWOAVZSLTqy7aSUSHUu9%2BTtIK8Aq4DCR%2FdzIc4yneXClwVAXOIn2rOsc58DsEhaROXHJUCQ9CGK2JaAZjvar8NjaNz%2BFT5jn80Gux%2BJaZhwemRn9c4m5LI09bu%2F2PORMyhPMv8Rb3lXkGM45zTyn7f5GKubqQl3ksHivfNgfmQikTt2SteIqhU0BxKdQrTEOT3LqbnfU%2BKpQUJILdtTKB2UqeGviftqNDwy1vODCjYw5LQ4ckUzOk7aTCjUdzELikrzbAbk7gUDfuxQGLS%2FYNtGw6vAACAPsiukWE0q9gJ8swl%2Bj%2ByAY6pgEShF6PQ9%2F0IenKRouXw2OXBjEnTbAtTvGMsJd1Wsn61%2FFRBa9e7Tz%2F518OFl5BaBaFb%2FpTijJRNizRMO3HvDV0XLmIHNMGG1mFwmT2OntR7KjdOVLyGZq5wVhpMzRwqHSawCl%2F1v%2FaZ41w6EpoY2hqN7%2BiFGT8YBIQmtpTg78PEU%2FYFcdvldlXd%2FU9XtVNt%2FEdurEFVFv5YPoJdM7Mg4yam4c09%2BOz&X-Amz-Signature=7df7534efe4886c33e331c8e9c3327d882ab5c1b07ebb5c4b614cad6813ffc3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

