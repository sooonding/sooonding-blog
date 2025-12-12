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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/cf58a057-1d0c-4c87-9646-4c2a419ae386/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZY7S2JL5%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T010617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDNBSIMkwz64U8xtFHLsR984nFRVV0ONumjT0Yzu6wtjAIgW%2BPVim%2B5%2BOBBS9Lbk9j%2Fa2q5UJQt%2BpEooLy4Nkr2gAIqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDdr7rqdfcNbmAsGZyrcA0TsqtI2Muf2trFGGf53H2oV2FOW%2FeaTtb2VFONg2lUIxNEZECa3pWk2AGprT6gknhKqihRpluljmCJa%2F4JSFBeSewNz%2BzlkjZAItP2ewQtlcfSpdQIFNE6Wq188Xwyu7PRR4PzPjgKB%2Bzvz6ctRq9q88bh07nEMzMDOzYVhkUFOEPd2gxgCz2V93I%2BgDt7uwnfxvN37kvktKbRWD2ayfMTrIlBMnapwBDNWV0G%2Fl92%2F51DRXTzF64WKWPw34UW0bWsY8DAPz8Z4uwf8R6S0L0phXqYwAj7sW%2F8tkwGpXkYDd7cu1AdkdKmF9mnFye9ocQZ7cKyMO%2B6%2BSQ1O0ICrmQ1s7wKoEHSjpFi0qPPo2fq3AGxXy6zC3rYvlG4JOeGoS1KLBAD6G18RPuKLQEqIRaqFm1CZrBtqHGxLSVolM5nRObUgRps11fzrDfSVPL%2FLvxa57chm6I%2BEGPm1CtzppqSG8IBFWDCegC1WCo%2BBD9J5zaWr7Ntr6z8NXlBsTBPgOAmFsV8fkQTqD2S2tA3YdZzDphWXgDQW5dP%2FsOQXGBP2e8PLlmY4q7cHjEtTa%2B%2FFF24nzSmvqynY8O5ODEVCdkmgVaFb11O%2B4x7n7CnD%2FR8dUliSF1MdWghAKSIRMKrA7ckGOqUB2jbavKFBQLvXFcBCvvXw%2BLoaIeI7vPJzogi65Qlf2kcdqVkfO0flwWWHTgb1GbFn3NO%2BM65wke%2BYMA7rVpe0f4WJGNpwdWCYXcrxGmUj8coe337BO255NQo63c9JD69TMJ%2BcK58XqtG1YeIPNOo8lgejIEB%2FzIz6bfEzk4mA8JyiZxe4KsSciYp6wgKJjVQiiYbHWwN%2FoJSKdBOAhPQAgpkbWVym&X-Amz-Signature=e5231bddfe2fa87dd7d6ad97441ef346cbb6ae363ce0d3d5afabb53d1a6b53a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### 데이터 명세서


    ![유저(사용자) 테이블 : 사용자 정보를 관리하는 테이블 username에 UNIQUE 제약조건을 추가하여 중복 가입 방지 프로필 이미지는 선택적 기입 가능하게 설계](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/ac91cfb1-8136-4129-bfaf-c75363d81147/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD3GLY5S%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T010618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDaL4LvdexQi7louog6QgB6GNwU%2BLN00b%2BxvhgM510hOQIgf1xXKCMTFugI0poWPqGkIFF52UbC2%2FStBMqEqQV8%2BMEqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJaE404rpRoIbC7vQircA%2F328mhi0fNiWAbBrSypD2Tr%2BG%2FeNEK%2FWDtg7dEjvQ1MB%2F0GEvgY1bNDmlGKpHMOiI4lVFLdJqfBpZwJx8ZkT1euAoolmiNl%2BiadlCPXxEPeCkz55n0drtZmxRPsNxGKwHtcolUnyf47B1QrIITHKiLMxHyNt1vNtYK89wo0oTk%2B9%2FDPd8RsNleplj06%2BiwkvviTv6OpT77jv6oHTe%2Bg2aNjNos%2Fq9zjWZio7IuNxHIigMWGWWOJBciQL3LPM5nShRDyHB7YhUNM8OvRC8%2FhkgIjY6oNtnzLlLYgRFVQEF5iTDz5K9j75f9pT2eMAMvBcEG76f1pJ9ybw2oYohpyUyMj86oJBo84FAsmzkN%2FDaemFzAcUJx%2BUTZmOa8sqj9L1UiRSlF9sy3NuWI%2Fpm7AUz19AOSwpo%2B3XcVGZsLyI%2F7NVtZlm45waBmwuI8fGlkfV1ZH2AAsKwU1xJJvSX3USF9RPrKn87gQDobVAIZuz8xqiCXTHLl17riInTIftQOJFYIT73aOIiVK6SMhDVInvWKOvV8mAXRY6P9Kkt72%2Fi%2BaEKs16EHyEaGHTm%2F9F8AIMqb4X7mja1eRNjwm7Crswb7Cv0QnIIrr2gwmuVYUag4t4mfQJCHNnL%2BpsNK8MKjB7ckGOqUBEib7X8DZ5dw%2FV1vp1zqOOUfNPlSH8AHE0wP%2Fi27c3koRqcK%2BojKlSX6jAn1ivbsE4Mnm4KGdz13Fhsa7%2BnoWZZ%2BsDZeKMCqtxKqkbPdXD8lL8QjEex0sxC7527CYIzcJteazCQC3P0mAk4K1m3kmkrxjnciHnJl0J3p%2F%2BLfVb6maAGpR2bQOT1TlVBoEMNoL632T4bQd6%2BEvGZJ3eYOR%2FATtHODW&X-Amz-Signature=dd5a6825e461e08569688199eea1cbd04ebeccd5f8b67c475a191d9aa24ab291&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![아티스트 테이블 artist_company는 NULL 허용 (독립 아티스트 고려), 데뷔일을 별도로 관리하여 연차별 분류 가능](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/9bdcd9f5-6777-4650-9389-febdfaae1a9c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD3GLY5S%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T010618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDaL4LvdexQi7louog6QgB6GNwU%2BLN00b%2BxvhgM510hOQIgf1xXKCMTFugI0poWPqGkIFF52UbC2%2FStBMqEqQV8%2BMEqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJaE404rpRoIbC7vQircA%2F328mhi0fNiWAbBrSypD2Tr%2BG%2FeNEK%2FWDtg7dEjvQ1MB%2F0GEvgY1bNDmlGKpHMOiI4lVFLdJqfBpZwJx8ZkT1euAoolmiNl%2BiadlCPXxEPeCkz55n0drtZmxRPsNxGKwHtcolUnyf47B1QrIITHKiLMxHyNt1vNtYK89wo0oTk%2B9%2FDPd8RsNleplj06%2BiwkvviTv6OpT77jv6oHTe%2Bg2aNjNos%2Fq9zjWZio7IuNxHIigMWGWWOJBciQL3LPM5nShRDyHB7YhUNM8OvRC8%2FhkgIjY6oNtnzLlLYgRFVQEF5iTDz5K9j75f9pT2eMAMvBcEG76f1pJ9ybw2oYohpyUyMj86oJBo84FAsmzkN%2FDaemFzAcUJx%2BUTZmOa8sqj9L1UiRSlF9sy3NuWI%2Fpm7AUz19AOSwpo%2B3XcVGZsLyI%2F7NVtZlm45waBmwuI8fGlkfV1ZH2AAsKwU1xJJvSX3USF9RPrKn87gQDobVAIZuz8xqiCXTHLl17riInTIftQOJFYIT73aOIiVK6SMhDVInvWKOvV8mAXRY6P9Kkt72%2Fi%2BaEKs16EHyEaGHTm%2F9F8AIMqb4X7mja1eRNjwm7Crswb7Cv0QnIIrr2gwmuVYUag4t4mfQJCHNnL%2BpsNK8MKjB7ckGOqUBEib7X8DZ5dw%2FV1vp1zqOOUfNPlSH8AHE0wP%2Fi27c3koRqcK%2BojKlSX6jAn1ivbsE4Mnm4KGdz13Fhsa7%2BnoWZZ%2BsDZeKMCqtxKqkbPdXD8lL8QjEex0sxC7527CYIzcJteazCQC3P0mAk4K1m3kmkrxjnciHnJl0J3p%2F%2BLfVb6maAGpR2bQOT1TlVBoEMNoL632T4bQd6%2BEvGZJ3eYOR%2FATtHODW&X-Amz-Signature=702b7caf6c2854641e8798f92a05ef14218548969e4ebe423b702ec3c788bb7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![팔로우, 투표 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/3afd5fac-9dc9-4207-94aa-f93e592c1fc7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD3GLY5S%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T010618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDaL4LvdexQi7louog6QgB6GNwU%2BLN00b%2BxvhgM510hOQIgf1xXKCMTFugI0poWPqGkIFF52UbC2%2FStBMqEqQV8%2BMEqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJaE404rpRoIbC7vQircA%2F328mhi0fNiWAbBrSypD2Tr%2BG%2FeNEK%2FWDtg7dEjvQ1MB%2F0GEvgY1bNDmlGKpHMOiI4lVFLdJqfBpZwJx8ZkT1euAoolmiNl%2BiadlCPXxEPeCkz55n0drtZmxRPsNxGKwHtcolUnyf47B1QrIITHKiLMxHyNt1vNtYK89wo0oTk%2B9%2FDPd8RsNleplj06%2BiwkvviTv6OpT77jv6oHTe%2Bg2aNjNos%2Fq9zjWZio7IuNxHIigMWGWWOJBciQL3LPM5nShRDyHB7YhUNM8OvRC8%2FhkgIjY6oNtnzLlLYgRFVQEF5iTDz5K9j75f9pT2eMAMvBcEG76f1pJ9ybw2oYohpyUyMj86oJBo84FAsmzkN%2FDaemFzAcUJx%2BUTZmOa8sqj9L1UiRSlF9sy3NuWI%2Fpm7AUz19AOSwpo%2B3XcVGZsLyI%2F7NVtZlm45waBmwuI8fGlkfV1ZH2AAsKwU1xJJvSX3USF9RPrKn87gQDobVAIZuz8xqiCXTHLl17riInTIftQOJFYIT73aOIiVK6SMhDVInvWKOvV8mAXRY6P9Kkt72%2Fi%2BaEKs16EHyEaGHTm%2F9F8AIMqb4X7mja1eRNjwm7Crswb7Cv0QnIIrr2gwmuVYUag4t4mfQJCHNnL%2BpsNK8MKjB7ckGOqUBEib7X8DZ5dw%2FV1vp1zqOOUfNPlSH8AHE0wP%2Fi27c3koRqcK%2BojKlSX6jAn1ivbsE4Mnm4KGdz13Fhsa7%2BnoWZZ%2BsDZeKMCqtxKqkbPdXD8lL8QjEex0sxC7527CYIzcJteazCQC3P0mAk4K1m3kmkrxjnciHnJl0J3p%2F%2BLfVb6maAGpR2bQOT1TlVBoEMNoL632T4bQd6%2BEvGZJ3eYOR%2FATtHODW&X-Amz-Signature=f2504350284c1a362992d639392fa6fc33c55a11a2dc122a64d3ebb2c3b21475&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![크레딧, 조공 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/14fcc257-93f2-41a4-beea-289258d1487f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD3GLY5S%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T010618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDaL4LvdexQi7louog6QgB6GNwU%2BLN00b%2BxvhgM510hOQIgf1xXKCMTFugI0poWPqGkIFF52UbC2%2FStBMqEqQV8%2BMEqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJaE404rpRoIbC7vQircA%2F328mhi0fNiWAbBrSypD2Tr%2BG%2FeNEK%2FWDtg7dEjvQ1MB%2F0GEvgY1bNDmlGKpHMOiI4lVFLdJqfBpZwJx8ZkT1euAoolmiNl%2BiadlCPXxEPeCkz55n0drtZmxRPsNxGKwHtcolUnyf47B1QrIITHKiLMxHyNt1vNtYK89wo0oTk%2B9%2FDPd8RsNleplj06%2BiwkvviTv6OpT77jv6oHTe%2Bg2aNjNos%2Fq9zjWZio7IuNxHIigMWGWWOJBciQL3LPM5nShRDyHB7YhUNM8OvRC8%2FhkgIjY6oNtnzLlLYgRFVQEF5iTDz5K9j75f9pT2eMAMvBcEG76f1pJ9ybw2oYohpyUyMj86oJBo84FAsmzkN%2FDaemFzAcUJx%2BUTZmOa8sqj9L1UiRSlF9sy3NuWI%2Fpm7AUz19AOSwpo%2B3XcVGZsLyI%2F7NVtZlm45waBmwuI8fGlkfV1ZH2AAsKwU1xJJvSX3USF9RPrKn87gQDobVAIZuz8xqiCXTHLl17riInTIftQOJFYIT73aOIiVK6SMhDVInvWKOvV8mAXRY6P9Kkt72%2Fi%2BaEKs16EHyEaGHTm%2F9F8AIMqb4X7mja1eRNjwm7Crswb7Cv0QnIIrr2gwmuVYUag4t4mfQJCHNnL%2BpsNK8MKjB7ckGOqUBEib7X8DZ5dw%2FV1vp1zqOOUfNPlSH8AHE0wP%2Fi27c3koRqcK%2BojKlSX6jAn1ivbsE4Mnm4KGdz13Fhsa7%2BnoWZZ%2BsDZeKMCqtxKqkbPdXD8lL8QjEex0sxC7527CYIzcJteazCQC3P0mAk4K1m3kmkrxjnciHnJl0J3p%2F%2BLfVb6maAGpR2bQOT1TlVBoEMNoL632T4bQd6%2BEvGZJ3eYOR%2FATtHODW&X-Amz-Signature=edf46083997f90693eda9ee978574cda6edc01fdfcbf59d1a11f552f05f1eb05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


    ![후원 테이블](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/90bf2e8c-87ca-4829-aff1-27be82131f4a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD3GLY5S%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T010618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDaL4LvdexQi7louog6QgB6GNwU%2BLN00b%2BxvhgM510hOQIgf1xXKCMTFugI0poWPqGkIFF52UbC2%2FStBMqEqQV8%2BMEqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJaE404rpRoIbC7vQircA%2F328mhi0fNiWAbBrSypD2Tr%2BG%2FeNEK%2FWDtg7dEjvQ1MB%2F0GEvgY1bNDmlGKpHMOiI4lVFLdJqfBpZwJx8ZkT1euAoolmiNl%2BiadlCPXxEPeCkz55n0drtZmxRPsNxGKwHtcolUnyf47B1QrIITHKiLMxHyNt1vNtYK89wo0oTk%2B9%2FDPd8RsNleplj06%2BiwkvviTv6OpT77jv6oHTe%2Bg2aNjNos%2Fq9zjWZio7IuNxHIigMWGWWOJBciQL3LPM5nShRDyHB7YhUNM8OvRC8%2FhkgIjY6oNtnzLlLYgRFVQEF5iTDz5K9j75f9pT2eMAMvBcEG76f1pJ9ybw2oYohpyUyMj86oJBo84FAsmzkN%2FDaemFzAcUJx%2BUTZmOa8sqj9L1UiRSlF9sy3NuWI%2Fpm7AUz19AOSwpo%2B3XcVGZsLyI%2F7NVtZlm45waBmwuI8fGlkfV1ZH2AAsKwU1xJJvSX3USF9RPrKn87gQDobVAIZuz8xqiCXTHLl17riInTIftQOJFYIT73aOIiVK6SMhDVInvWKOvV8mAXRY6P9Kkt72%2Fi%2BaEKs16EHyEaGHTm%2F9F8AIMqb4X7mja1eRNjwm7Crswb7Cv0QnIIrr2gwmuVYUag4t4mfQJCHNnL%2BpsNK8MKjB7ckGOqUBEib7X8DZ5dw%2FV1vp1zqOOUfNPlSH8AHE0wP%2Fi27c3koRqcK%2BojKlSX6jAn1ivbsE4Mnm4KGdz13Fhsa7%2BnoWZZ%2BsDZeKMCqtxKqkbPdXD8lL8QjEex0sxC7527CYIzcJteazCQC3P0mAk4K1m3kmkrxjnciHnJl0J3p%2F%2BLfVb6maAGpR2bQOT1TlVBoEMNoL632T4bQd6%2BEvGZJ3eYOR%2FATtHODW&X-Amz-Signature=b4d22e6a3bc558e2e8de1cddfab91e2ab179226e731eb61a63ffca9c4ac8ed21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Diagram_from_dbdiagram.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4e1eaacf-7652-45ea-9e3f-3232f5fbcc03/c8ff27b9-8871-4002-ab2d-75445cadf6c6/Diagram_from_dbdiagram.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZY7S2JL5%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T010617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDNBSIMkwz64U8xtFHLsR984nFRVV0ONumjT0Yzu6wtjAIgW%2BPVim%2B5%2BOBBS9Lbk9j%2Fa2q5UJQt%2BpEooLy4Nkr2gAIqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDdr7rqdfcNbmAsGZyrcA0TsqtI2Muf2trFGGf53H2oV2FOW%2FeaTtb2VFONg2lUIxNEZECa3pWk2AGprT6gknhKqihRpluljmCJa%2F4JSFBeSewNz%2BzlkjZAItP2ewQtlcfSpdQIFNE6Wq188Xwyu7PRR4PzPjgKB%2Bzvz6ctRq9q88bh07nEMzMDOzYVhkUFOEPd2gxgCz2V93I%2BgDt7uwnfxvN37kvktKbRWD2ayfMTrIlBMnapwBDNWV0G%2Fl92%2F51DRXTzF64WKWPw34UW0bWsY8DAPz8Z4uwf8R6S0L0phXqYwAj7sW%2F8tkwGpXkYDd7cu1AdkdKmF9mnFye9ocQZ7cKyMO%2B6%2BSQ1O0ICrmQ1s7wKoEHSjpFi0qPPo2fq3AGxXy6zC3rYvlG4JOeGoS1KLBAD6G18RPuKLQEqIRaqFm1CZrBtqHGxLSVolM5nRObUgRps11fzrDfSVPL%2FLvxa57chm6I%2BEGPm1CtzppqSG8IBFWDCegC1WCo%2BBD9J5zaWr7Ntr6z8NXlBsTBPgOAmFsV8fkQTqD2S2tA3YdZzDphWXgDQW5dP%2FsOQXGBP2e8PLlmY4q7cHjEtTa%2B%2FFF24nzSmvqynY8O5ODEVCdkmgVaFb11O%2B4x7n7CnD%2FR8dUliSF1MdWghAKSIRMKrA7ckGOqUB2jbavKFBQLvXFcBCvvXw%2BLoaIeI7vPJzogi65Qlf2kcdqVkfO0flwWWHTgb1GbFn3NO%2BM65wke%2BYMA7rVpe0f4WJGNpwdWCYXcrxGmUj8coe337BO255NQo63c9JD69TMJ%2BcK58XqtG1YeIPNOo8lgejIEB%2FzIz6bfEzk4mA8JyiZxe4KsSciYp6wgKJjVQiiYbHWwN%2FoJSKdBOAhPQAgpkbWVym&X-Amz-Signature=51ca51cd2c1828ff36c03081f9a7ea89e9ee5771091b9b5cfbf971997740357e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

