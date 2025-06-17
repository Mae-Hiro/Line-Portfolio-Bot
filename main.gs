const ACCESS_TOKEN = PropertiesService.getScriptProperties().getProperty('ACCESS_TOKEN');
const LINE_URL = 'https://api.line.me/v2/bot/message/reply';

function doPost(e) {
  const json = JSON.parse(e.postData.contents);
  const data = json.events[0];
  const message = createReplyMessage(data.message.text);

  const option = {
    'headers': {
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': 'Bearer ' + ACCESS_TOKEN,
    },
    'method': 'post',
    'payload': JSON.stringify({
      'replyToken': data.replyToken,
      'messages': [{
        "type": "text",
        "text": message
      }],
    }),
  };

  UrlFetchApp.fetch(LINE_URL, option);
}

function createReplyMessage(replyMessage) {
  if (replyMessage === 'おはよう') {
    return 'おはよう！今日も1日頑張ろう！';
  }

  if (replyMessage === 'おやすみ') {
    return 'おやすみ。いい夢見てね。';
  }

  if (replyMessage === '明日の天気は？') {
  try {
    const result = UrlFetchApp.fetch('https://www.jma.go.jp/bosai/forecast/data/forecast/340000.json'); 
    const tenkiJson = JSON.parse(result);
    
    const weather = tenkiJson[0].timeSeries[0].areas[0].weathers[1] || '不明';
    const temps = tenkiJson[1].timeSeries[0].areas[0].temps || [];

    return `🌤️ 明日の広島の天気 🌤️\n天気：${weather}`;
  } catch (e) {
    Logger.log('天気取得エラー: ' + e);
    return '天気情報の取得に失敗しました。後でもう一度お試しください。';
  }
  }

  if (replyMessage === '制作者') {
  return '制作者情報：\n・鳥取県出身\n・広島工業大学 情報学部 情報工学科\n・前田 大貴';
  }

  if (replyMessage === 'スキル') {
  return 'スキル\n・Python\n・C\n・Java\n・HTML/CSS（基礎）\n・GAS（LINE Bot連携）\n・GitHub利用経験あり';
  }

  if (replyMessage === '資格') {
  return '資格\n・基本情報技術者\n・G検定';
  }

  if (replyMessage === '制作物') {
  return '制作物\n・Pixel_Escape(microbitゼミの制作物)\n\n・BallClickGame(Processingによる制限時間付きボールクリックゲーム)\n\n・GASでLINE Botを制作';
  }

  if (replyMessage === 'GitHub') {
  return 'GitHub\nhttps://github.com/Mae-Hiro';
  }

  if (replyMessage === '連絡先') {
  return '連絡先\n個人用メール: \nhi03s1mi06@docomo.ne.jp\n学業用メール: \nbk23284@cc.it-hiroshima.ac.jp';
  }

  if (replyMessage === 'メニュー') {
    return '📋 メニュー\n・制作者\n・スキル\n・資格\n・制作物\n・GitHub\n・連絡先\n・おはよう\n・おやすみ\n・明日の天気は？\n・メニュー';
  }

  return '「メニュー」と送ると使える言葉が見れますよ！';
}

