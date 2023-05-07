import axios from 'axios';

export async function getKakaoToken(code: string): Promise<string> {
	const url = `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=efda2ba78b6aad21de302640af6b0496&redirect_uri=http://localhost:5173/oauth&code=${code}`;
	const response = await axios.post(url);
	return response.data.access_token;
}

export type TKakaoUser = {
	id: number;
	connected_at: string;
	properties: {
		nickname: string;
	};
	kakao_account: {
		profile: {
			nickname: string;
		};
		profile_needs_agreement: boolean;
	};
};

export async function getKakaoUser(accessToken: string): Promise<TKakaoUser | null> {
	const response = await axios.get('https://kapi.kakao.com/v2/user/me', {
		headers: {
			Authorization: `Bearer ${accessToken}`
		}
	});
	const user = response.data;
	return user;
}
