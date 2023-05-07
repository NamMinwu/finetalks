import { json, redirect, type RequestHandler } from '@sveltejs/kit';
import * as jwt from 'jsonwebtoken';
import { getKakaoToken, getKakaoUser } from '$lib/server/kakao';
import { prismaClient } from '$lib/server/prisma';

export const GET = (async ({ url, cookies }) => {
	const code = url.searchParams.get('code');

	if (!code) return json({ status: 400, body: { error: 'code is required' } });

	const kakaoToken = await getKakaoToken(code);

	const kakaoUser = await getKakaoUser(kakaoToken);

	if (!kakaoUser) return json({ status: 400, body: { error: 'user not found' } });

	console.log(kakaoUser);
	let user = await prismaClient.user.findUnique({
		where: { kakaoID: kakaoUser.id.toString() }
	});
	if (!user) {
		user = await prismaClient.user.create({
			data: { kakaoID: kakaoUser.id.toString(), name: kakaoUser.kakao_account.profile.nickname }
		});
	}
	const token = jwt.sign({ id: user.id, name: user.name }, 'secret', {
		expiresIn: '1h'
	});
	cookies.set('session', token);

	throw redirect(302, '/mainpage');
	// TODO: 카카오 유저로 로그인 로직 처리
}) satisfies RequestHandler;
