import React from 'react';
import {
	TextWrapper,
	HighlightTextWrapper,
	QuestionTitleWrapper,
	QuestionTextWrapper,
} from './styles/StyleContainer';

export const mockData = [
	{
		id: 0,
		text: (
			<>
				<TextWrapper>안녕하십니까 승객 여러분</TextWrapper>
				<TextWrapper>코로나로 여행을 못 가셔서 답답하시죠?</TextWrapper>
				<br />
				<TextWrapper>그래서 저희가 코로나 이후</TextWrapper>
				<TextWrapper>여행을 준비하시는데 도움이 되고자</TextWrapper>
				<TextWrapper>주요 도시를 가상 여행하며 알 수 있는</TextWrapper>
				<TextWrapper>
					<HighlightTextWrapper>여행 성향 테스트</HighlightTextWrapper> 를
					준비했습니다.
				</TextWrapper>
				<br />
				<TextWrapper>
					본인의{' '}
					<HighlightTextWrapper border>여행성향 유형</HighlightTextWrapper>을
					확인하고,
				</TextWrapper>
				<TextWrapper>
					<HighlightTextWrapper border>추천 목적지</HighlightTextWrapper>를
					확인해보세요.
				</TextWrapper>
			</>
		),
	},
	{
		id: 1,
		question: (
			<>
				<QuestionTitleWrapper>
					자! 전세계 코로나가 종식 되었습니다
				</QuestionTitleWrapper>
				<QuestionTitleWrapper>(예이~!)</QuestionTitleWrapper>
				<QuestionTitleWrapper>당장 여행을 떠나려 합니다.</QuestionTitleWrapper>
				<QuestionTitleWrapper>
					승객님은 아래 중 어떤 유형이신가요?
				</QuestionTitleWrapper>
			</>
		),
		choices: [
			<>
				<QuestionTextWrapper>이미 전 하고싶은</QuestionTextWrapper>
				<QuestionTextWrapper>여행 버킷리스트가 있어요~.</QuestionTextWrapper>
				<QuestionTextWrapper>이 중 골라 갈꺼에요!</QuestionTextWrapper>
			</>,
			<>
				<QuestionTextWrapper>아싸!</QuestionTextWrapper>
				<QuestionTextWrapper>이번엔 어떤 여행이 좋을까?</QuestionTextWrapper>
				<QuestionTextWrapper>이제 찾아보고 계획해 봐야죠!</QuestionTextWrapper>
			</>,
		],
	},
	{
		id: 2,
		question: (
			<>
				<QuestionTitleWrapper>
					인천에서 파리까지 비행시간은 9시간..
				</QuestionTitleWrapper>
				<QuestionTitleWrapper>
					기내에서 승객님의 스타일은 어떤가요?
				</QuestionTitleWrapper>
			</>
		),
		choices: [
			<QuestionTextWrapper>잠만보</QuestionTextWrapper>,
			<QuestionTextWrapper>푸드파이터</QuestionTextWrapper>,
			<QuestionTextWrapper>불만왕</QuestionTextWrapper>,
			<QuestionTextWrapper>독서(영화)광</QuestionTextWrapper>,
		],
	},
	{
		id: 3,
		question: (
			<>
				<QuestionTitleWrapper>
					런던 히드로 공항에 도착했습니다.
				</QuestionTitleWrapper>
				<QuestionTitleWrapper>
					승객님은 어떤 걸 먼저 하실 건가요?
				</QuestionTitleWrapper>
			</>
		),
		choices: [
			<>
				<QuestionTextWrapper>
					당장 런던아이, 타워브릿지 봐야해~
				</QuestionTextWrapper>
				<QuestionTextWrapper>무작정 관광지 순회하기</QuestionTextWrapper>
			</>,
			<QuestionTextWrapper>유심칩부터 사야지~</QuestionTextWrapper>,
			<>
				<QuestionTextWrapper>너무 힘들어~ㅠㅠ</QuestionTextWrapper>
				<QuestionTextWrapper>숙소가서 뻗기</QuestionTextWrapper>
			</>,
		],
	},
	{
		id: 4,
		question: (
			<>
				<QuestionTitleWrapper>로마에 도착했습니다.</QuestionTitleWrapper>
				<QuestionTitleWrapper>
					승객님이 여행을 하는 스타일은?
				</QuestionTitleWrapper>
			</>
		),
		choices: [
			<>
				<QuestionTextWrapper>안 가본 이름있는 곳들을</QuestionTextWrapper>
				<QuestionTextWrapper>찾아가 볼래요</QuestionTextWrapper>
			</>,
			<>
				<QuestionTextWrapper>
					여러가지보다 목적한 주요 일정을
				</QuestionTextWrapper>
				<QuestionTextWrapper>소화하고 최대한 쉴래요</QuestionTextWrapper>
			</>,
			<>
				<QuestionTextWrapper>특별한 선호보다는</QuestionTextWrapper>
				<QuestionTextWrapper>
					그 때 분위기 맞추는 걸 선호해요
				</QuestionTextWrapper>
			</>,
		],
	},
	{
		id: 5,
		question: (
			<>
				<QuestionTitleWrapper>
					융프라우에 올라가게 되었습니다.
				</QuestionTitleWrapper>
				<QuestionTitleWrapper>
					여기서 승객님과 가장 비슷한 상황은?
				</QuestionTitleWrapper>
			</>
		),
		choices: [
			<>
				<QuestionTextWrapper>
					그래도 유럽에서 가장 높은 산인데
				</QuestionTextWrapper>
				<QuestionTextWrapper>
					정상 한번쯤은 밟아봐야 하지 않겠어?
				</QuestionTextWrapper>
			</>,
			<>
				<QuestionTextWrapper>기차타고 올라가는 것까지만</QuestionTextWrapper>
				<QuestionTextWrapper>인스타에 공유해야지</QuestionTextWrapper>
			</>,
			<>
				<QuestionTextWrapper>아 귀찮은데 산은 무슨 산이야</QuestionTextWrapper>
				<QuestionTextWrapper>린트 초콜렛이나 먹자</QuestionTextWrapper>
			</>,
		],
	},
	{
		id: 6,
		question: (
			<QuestionTitleWrapper>
				여행지에서 승객님의 역할은 무엇인가요?
			</QuestionTitleWrapper>
		),
		choices: [
			<QuestionTextWrapper>네비게이션</QuestionTextWrapper>,
			<QuestionTextWrapper>엔터테이너</QuestionTextWrapper>,
			<QuestionTextWrapper>맛집탐색기</QuestionTextWrapper>,
		],
	},
	{
		id: 7,
		question: (
			<>
				<QuestionTitleWrapper>오늘은 바티칸 투어하는 날!</QuestionTitleWrapper>
				<QuestionTitleWrapper>
					승객님은 어떻게 투어할 것인가요?
				</QuestionTitleWrapper>
			</>
		),
		choices: [
			<QuestionTextWrapper>최대한 일찍가서 혼자 여유롭게~</QuestionTextWrapper>,
			<QuestionTextWrapper>가이드 그룹 투어로 스마트하게~</QuestionTextWrapper>,
			<QuestionTextWrapper>천지창조부터 보러 달려달려~</QuestionTextWrapper>,
		],
	},
	{
		id: 8,
		question: (
			<>
				<QuestionTitleWrapper>
					도쿄에서 일행들이 라멘을 먹자고 합니다.
				</QuestionTitleWrapper>
				<QuestionTitleWrapper>여기서 승객님의 선택은?</QuestionTitleWrapper>
			</>
		),
		choices: [
			<QuestionTextWrapper>일본 라멘은 무조건 이치란이지~</QuestionTextWrapper>,
			<>
				<QuestionTextWrapper>라멘이 다 거기서 거기지.</QuestionTextWrapper>
				<QuestionTextWrapper>
					가장 가깝고 평점 괜찮은 데 가야지...
				</QuestionTextWrapper>
			</>,
			<>
				<QuestionTextWrapper>라멘은 무슨 라멘</QuestionTextWrapper>
				<QuestionTextWrapper>초밥 먹을래요~~!!</QuestionTextWrapper>
			</>,
		],
	},
	{
		id: 9,
		question: (
			<>
				<QuestionTitleWrapper>
					승객님. 여행에 남는건 역시 사진밖에 없죠~
				</QuestionTitleWrapper>
				<QuestionTitleWrapper>
					승객님은 아래 중 어떤 유형이신가요?
				</QuestionTitleWrapper>
			</>
		),
		choices: [
			<>
				<QuestionTextWrapper>사진은 많이 찍고 보는거죠~</QuestionTextWrapper>
				<QuestionTextWrapper>내 사진, 음식 사진 등등.</QuestionTextWrapper>
				<QuestionTextWrapper>
					사진 잘찍는 사람이랑 여행가면 너무 편해요
				</QuestionTextWrapper>
			</>,
			<>
				<QuestionTextWrapper>
					사진은 필요한 만큼만 찍거나 거의 안 찍어요
				</QuestionTextWrapper>
				<QuestionTextWrapper> 여행에 집중해야죠~ ㅎㅎ</QuestionTextWrapper>
				<QuestionTextWrapper>찍어주는 건 좋아해요</QuestionTextWrapper>
			</>,
		],
	},
	{
		id: 10,
		question: (
			<>
				<QuestionTitleWrapper>
					호치민에서 8차선 횡단보도를 마주쳤어요.
				</QuestionTitleWrapper>
				<QuestionTitleWrapper>승객님이라면?</QuestionTitleWrapper>
			</>
		),
		choices: [
			<>
				<QuestionTextWrapper>현지인을 따라 유유히</QuestionTextWrapper>
				<QuestionTextWrapper>차와 오토바이를 피해 건너요</QuestionTextWrapper>
			</>,
			<>
				<QuestionTextWrapper>하염없이 기다려요</QuestionTextWrapper>
				<QuestionTextWrapper>언젠가는 건널 수 있겠죠..?</QuestionTextWrapper>
			</>,
			<>
				<QuestionTextWrapper>어리둥절하며</QuestionTextWrapper>
				<QuestionTextWrapper>당장 그랩을 불러요</QuestionTextWrapper>
			</>,
		],
	},
	{
		id: 11,
		question: (
			<>
				<QuestionTitleWrapper>
					상해에서 질 좋고 저렴한 물건을 찾았어요.
				</QuestionTitleWrapper>
				<QuestionTitleWrapper>승객님이라면?</QuestionTitleWrapper>
			</>
		),
		choices: [
			<QuestionTextWrapper>
				득템이라 생각하고 여러개를 사요
			</QuestionTextWrapper>,
			<QuestionTextWrapper>
				가져다가 한국에서 팔 생각부터 들어요.
			</QuestionTextWrapper>,
			<QuestionTextWrapper>너무 저렴해 의심부터 드네요</QuestionTextWrapper>,
		],
	},
	{
		id: 12,
		question: (
			<>
				<QuestionTitleWrapper>
					서울에서 한달살기를 하게 되었어요.
				</QuestionTitleWrapper>
				<QuestionTitleWrapper>어떻게 살아볼까요?</QuestionTitleWrapper>
			</>
		),
		choices: [
			<>
				<QuestionTextWrapper>교통이 좋은 강남에서</QuestionTextWrapper>
				<QuestionTextWrapper>
					커리어를 쌓을 수 있는 일을 찾아볼래요
				</QuestionTextWrapper>
			</>,
			<>
				<QuestionTextWrapper>이태원에서 다양한 외국인들과</QuestionTextWrapper>
				<QuestionTextWrapper>어울리며 CHILL할래요~</QuestionTextWrapper>
			</>,
			<>
				<QuestionTextWrapper>각 지방 도시들을 다니고</QuestionTextWrapper>
				<QuestionTextWrapper>자연을 벗 삼아 살아야죠</QuestionTextWrapper>
			</>,
		],
	},
	{
		id: 13,
		question: (
			<>
				<QuestionTitleWrapper>라스베가스에서 카지노로</QuestionTitleWrapper>
				<QuestionTitleWrapper>500달러를 벌게 되었어요~!</QuestionTitleWrapper>
				<QuestionTitleWrapper>이후 승객님의 행보는...?</QuestionTitleWrapper>
			</>
		),
		choices: [
			<QuestionTextWrapper>5000 달러를 향해 달려야죠~</QuestionTextWrapper>,
			<QuestionTextWrapper>
				그동안 꿈꿔왔던 미슐랭을 예약ㄱㄱ!
			</QuestionTextWrapper>,
			<QuestionTextWrapper>
				기분좋게 친구들에게 용돈 뿌리기~
			</QuestionTextWrapper>,
		],
	},
	{
		id: 14,
		question: (
			<>
				<QuestionTitleWrapper>기나긴 여행을 무사히 마치고</QuestionTitleWrapper>
				<QuestionTitleWrapper>
					어느덧 돌아오는 비행기 안이네요.
				</QuestionTitleWrapper>
				<QuestionTitleWrapper>승객님의 옆 자리에는?</QuestionTitleWrapper>
			</>
		),
		choices: [
			<>
				<QuestionTextWrapper>아 네</QuestionTextWrapper>
				<QuestionTextWrapper>
					가까운 사람들과 이번에 같이 여행해요
				</QuestionTextWrapper>
			</>,
			<>
				<QuestionTextWrapper>
					옆에요? 모르는 사람인데 무슨말인지..
				</QuestionTextWrapper>
				<QuestionTextWrapper>저 일행 없어요ㅎㅎ</QuestionTextWrapper>
			</>,
		],
	},
];

export const mockCountries = [
	{
		abvName: 'FRA',
		name: 'france',
	},
	{
		abvName: 'KOR',
		name: 'korea',
	},
	{
		abvName: 'ITA',
		name: 'italy',
	},
	{
		abvName: 'JPN',
		name: 'japan',
	},
	{
		abvName: 'CHN',
		name: 'china',
	},
	{
		abvName: 'USA',
		name: 'usa',
	},
	{
		abvName: 'GRE',
		name: 'greece',
	},
	{
		abvName: 'ESP',
		name: 'spain',
	},
	{
		abvName: 'SUI',
		name: 'swiss',
	},
	{
		abvName: 'HKG',
		name: 'hongkong',
	},
	{
		abvName: 'UAE',
		name: 'uae',
	},
	{
		abvName: 'UK',
		name: 'uk',
	},
	{
		abvName: 'RUS',
		name: 'russia',
	},
	{
		abvName: 'BRA',
		name: 'brazil',
	},
	{
		abvName: 'TUR',
		name: 'turkey',
	},
	{
		abvName: 'EGY',
		name: 'egypt',
	},
	{
		abvName: 'SIN',
		name: 'singapore',
	},
	{
		abvName: 'CAN',
		name: 'canada',
	},
	{
		abvName: 'CZE',
		name: 'czech',
	},
	{
		abvName: 'INA',
		name: 'indonesia',
	},
	{
		abvName: 'AUS',
		name: 'australia',
	},
	{
		abvName: 'AUT',
		name: 'austria',
	},
	{
		abvName: 'DEN',
		name: 'denmark',
	},
	{
		abvName: 'GER',
		name: 'germany',
	},
	{
		abvName: 'LUX',
		name: 'luxembourg',
	},
	{
		abvName: 'MYS',
		name: 'malaysia',
	},
	{
		abvName: 'MEX',
		name: 'mexico',
	},
	{
		abvName: 'NED',
		name: 'netherlands',
	},
	{
		abvName: 'NZL',
		name: 'newzealand',
	},
	{
		abvName: 'NOR',
		name: 'norway',
	},
	{
		abvName: 'POL',
		name: 'poland',
	},
	{
		abvName: 'POR',
		name: 'portugal',
	},
	{
		abvName: 'SWE',
		name: 'sweden',
	},
	{
		abvName: 'THA',
		name: 'thailand',
	},
];

export const famousCountries = [
	{
		abvName: 'FRA',
		name: 'france',
	},
	{
		abvName: 'KOR',
		name: 'korea',
	},
	{
		abvName: 'ITA',
		name: 'italy',
	},
	{
		abvName: 'JPN',
		name: 'japan',
	},
	{
		abvName: 'CHN',
		name: 'china',
	},
	{
		abvName: 'USA',
		name: 'usa',
	},
	{
		abvName: 'USA2',
		name: 'usa2',
	},
	{
		abvName: 'ESP',
		name: 'spain',
	},
	{
		abvName: 'HKG',
		name: 'hongkong',
	},
	{
		abvName: 'UAE',
		name: 'uae',
	},
	{
		abvName: 'UK',
		name: 'uk',
	},
	{
		abvName: 'TUR',
		name: 'turkey',
	},
	{
		abvName: 'EGY',
		name: 'egypt',
	},
	{
		abvName: 'CZE',
		name: 'czech',
	},
	{
		abvName: 'INA',
		name: 'indonesia',
	},
	{
		abvName: 'THA',
		name: 'thailand',
	},
];
