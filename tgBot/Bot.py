import telebot

bot = telebot.TeleBot("6634744544:AAHf_agyFz8UfBsYEm7-CzITSbIxr41LoLM")
@bot.message_handler(commands=["start"])
def start(message):
    bot.send_message(message.chat.id, "Привет")

@bot.message_handler(commands=["getId"])
def getId(message):
    bot.send_message(message.chat.id, message.chat.id)

bot.polling(none_stop=True)