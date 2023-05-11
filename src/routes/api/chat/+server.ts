import type { RequestHandler } from './$types';
import axios from 'axios';
import { OPENAI_API_KEY } from '$env/static/private';
import { error, json } from '@sveltejs/kit';
import type { ChatCompletionRequestMessage, CreateChatCompletionRequest } from 'openai';
export const POST = (async (event) => {
	console.log(OPENAI_API_KEY);
	const requestData = await event.request.json();
	const reqMessages: string = requestData.message;
	if (!reqMessages) {
		throw error(500, 'no request message');
	}
	const chatRequestOpts: CreateChatCompletionRequest = {
		model: 'gpt-3.5-turbo',
		messages: [{ role: 'user', content: reqMessages }]
	};

	const moderationRes = await axios.post(
		'https://api.openai.com/v1/chat/completions',

		chatRequestOpts,
		{
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${OPENAI_API_KEY}`
			}
		}
	);
	return json(moderationRes.data);
}) satisfies RequestHandler;
