import { bot } from '../../index.ts';
import { type Context } from '@netlify/functions';
import { type Update } from 'telegraf/types';

bot.start(ctx => {
  console.log('Received /start command');
  try {
    return ctx.reply('Hi');
  } catch (e) {
    console.error('error in start action:', e);
    return ctx.reply('Error occured');
  }
});

exports.handler = async (req: Request, context: Context) => {
  try {
    if (req.body !== null) {
      const data: Update = await req.json();
      await bot.handleUpdate(data);
      return { statusCode: 200, body: '' };
    }
    return { statusCode: 43, body: '' };
  } catch (e) {
    console.error('error in handler:', e);
    return { statusCode: 400, body: 'This endpoint is meant for bot and telegram communication' };
  }
};
