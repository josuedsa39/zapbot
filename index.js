import whatsappApi from "whatsapp-web.js";
import qrcode from "qrcode-terminal";
import fs from "fs";
const { Client, LocalAuth, MessageMedia } = whatsappApi;

const client1 = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: {
    executablePath:
      "./node_modules\\whatsapp-web.js\\node_modules\\puppeteer\\.local-chromium\\win64-982053\\chrome-win\\chrome.exe",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  },
});

client1.initialize();

client1.on("loading_screen", (percent, message) => {
  console.log("LOADING SCREEN", percent, message);
});

client1.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client1.on("ready", () => {
  console.log("Client is ready!");
});

const usersWhoReceivedFunnel = {};

client1.on("message", async (message) => {
  const senderPhoneNumber = message.from;
  if (!usersWhoReceivedFunnel[senderPhoneNumber]) {
    console.log("Online!");
    usersWhoReceivedFunnel[senderPhoneNumber] = true;

    setTimeout(async function () {
    let text0 = 'Opa Josué aqui 👨💻 Antes de qualquer coisa, me faz um favor.?\n👇👇👇👇\n✅ SALVE O MEU CONTATO \n✅ FALE QUE SALVOU dizendo seu nome. \n\nRecebo muitas mensagens por dia no Whatsapp, priorizo quem salva meu contato, pois vou saber que é uma pessoa *DETERMINADA* e não *CURIOSA*. \n\n ⚠️ Obs: Se não salvar, minha mensagem não vai chegar até você devido a nova atualização do Whatsapp ⚠️';
    await client1.sendMessage(message.from, text0);

    setTimeout(async function () {
      await sendMessageType("./Roteiro/Áudio 01.mp3", message);
      setTimeout(async function () {
        let text1 = `Enquanto eu vou gravando aqui os aúdios, já me segue nas minhas redes sociais, quero aqui te passar total confiança e ser pra você o que eu queria que fossem quando eu comecei a buscar formas de ganhar dinheiro na internet.\n\n🔴veja os destaques do meu Instagram : https://www.instagram.com/eujosue_silva/`;
        await client1.sendMessage(message.from, text1);

        setTimeout(async function () {
          await sendMessageType("./Roteiro/Áudio 02.mp3", message);
          setTimeout(async function () {
            await sendVideoMessage(message, "./Roteiro/Vídeo 01.mp4");
            setTimeout(async function () {
              let text2 = `Também tem alguns sites que provavelmente você conhece e talvez já foi até comprador, como o Mercado Livre, Shein, Shopee, Nike, etc...\nTrabalhando de maneira profissional, é só copiar e colar o método, não precisa comprar nada para revender...\nAgora, deixa continuar a explicação aqui`;
              await client1.sendMessage(message.from, text2);

              setTimeout(async function () {
                await sendMessageType("./Roteiro/Áudio 03.mp3", message);
                setTimeout(async function () {
                  await sendVideoMessage(message, "./Roteiro/Vídeo 02.mp4");
                  setTimeout(async function () {
                    await sendImageMessage(message, "./Roteiro/Imagem 01.jpg");
                    setTimeout(async function () {
                      let text3 = `Na sequência tem alguns dos meus mentorados que confiaram em mim e hoje têm sucesso nesse mercado, tudo para que você veja que não é só eu que ganho dinheiro com esse mercado, mas sim todos que aplicam o plano de mentoria e muito em breve pode ser você com esses ganhos!! 🙌`;
                      await client1.sendMessage(message.from, text3);

                      for (let i = 3; i <= 6; i++) {
                        await new Promise((resolve) =>
                          setTimeout(async function () {
                            await sendVideoMessage(
                              message,
                              `./Roteiro/Vídeo 0${i}.mp4`
                            );
                            resolve();
                          }, 10000)
                        );
                      }

                      setTimeout(async function () {
                        await sendMessageType(
                          "./Roteiro/Áudio 04.mp3",
                          message
                        );
                        setTimeout(async function () {
                          await sendMessageType(
                            "./Roteiro/Áudio 05.mp3",
                            message
                          );
                          setTimeout(async function () {
                            let text4 = `Na sequência tem o plano de mentoria por dentro e tudo que vai ter acesso, lembrando que você vai assistindo e já aplicando. Em menos de 2 dias, tem alunos fazendo mais de 500 Reais!!`;
                            await client1.sendMessage(message.from, text4);

                            setTimeout(async function () {
                              await sendVideoMessage(
                                message,
                                "./Roteiro/Vídeo 07.mp4"
                              );
                              setTimeout(async function () {
                                await sendMessageType(
                                  "./Roteiro/Áudio 06.mp3",
                                  message
                                );
                                setTimeout(async function () {
                                  await sendMessageType(
                                    "./Roteiro/Áudio 07.mp3",
                                    message
                                  );
                                  setTimeout(async function () {
                                    let text5 = `♨️ Se você realmente quer mudar sua vida, escute todos os áudios 🙏🏽\n\nTirei mais de 10 minutos do meu tempo para te dar uma atenção máxima e individual, porque realmente você merece essa oportunidade 🚀\n\nNão me deixe falando sozinho, não faria isso com você jamais! ☹️\nAGUARDO SEU RETORNO`;
                                    await client1.sendMessage(
                                      message.from,
                                      text5
                                    );
                                  }, 10000);
                                }, 30000);
                              }, 30000);
                            }, 10000);
                          }, 30000);
                        }, 30000);
                      }, 10000);
                    }, 10000);
                  }, 10000);
                }, 10000);
              }, 30000);
            }, 10000);
          }, 10000);
        }, 30000);
      }, 10000);
    }, 2000000);
}, 1000);
  }
});

async function sendMessageType(pathFile, message) {
  let messageMediaAudio1 = MessageMedia.fromFilePath(pathFile);
  await client1.sendMessage(message.from, messageMediaAudio1, {
    sendAudioAsVoice: true,
  });
  await client1.sendSeen();
}

async function sendVideoMessage(message, filename) {
  try {
    const videoPath = `./${filename}`;
    const videoFile = fs.readFileSync(videoPath, { encoding: "base64" });
    const videoMedia = new MessageMedia("video/mp4", videoFile, "video");

    await client1.sendMessage(message.from,videoMedia);
  } catch (error) {
    console.error(error);
  }
}

async function sendImageMessage(message, filename) {
  try {
    const imgPath = `./${filename}`;
    const imageFile = fs.readFileSync(imgPath, { encoding: "base64" });
    const imageMedia = new MessageMedia("image/jpeg", imageFile, "image");

    await client1.sendMessage(message.from,imageMedia);
  } catch (error) {
    console.error(error);
  }
}
