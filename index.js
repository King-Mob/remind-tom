require("dotenv").config();

const { matrix_server, bot_username, bot_password, tom_room_id } = process.env;

const sdk = require("matrix-js-sdk");

async function startApp() {
  const client = sdk.createClient({ baseUrl: matrix_server });
  await client.loginWithPassword(bot_username, bot_password);
  await client.startClient({ initialSyncLimit: 10 });

  const messageTom = () => {
    const names = [
      "champ",
      "sport",
      "chief",
      "numbnuts",
      "lardass",
      "chumbucket",
      "walmart reject",
      "ol buddy ol pal",
      "darling",
      ".....you....",
      "trucker",
      "cue-ball",
      "sailor",
      "dingus",
      "good-time-boy",
      "Mr Mod Revival",
      "big red",
      "friendo",
      "chickadoo",
      "JACK",
      "ice warrior ToTeM",
      "citizen smith",
    ];
    const actions = [
      "shoot mark an email",
      "circle back to Dr Mark",
      "give old marky mark a little sugar",
      "invite the light of Mark into your life",
      "pucker up for mark",
      "write a missive to mark",
      "seek out a new way of life (vis-a-vis mark)",
      "take a goddamn positive step in the right direction and email mark",
      "eeeeeeeeeemail mark",
      "get all dressed up, sit on the edge of your bed and cry, while emailing mark",
      "send just a tiny widdle email",
      "make the best decision of your life just by opening that email app",
      "reach out and touch Mark's base with your base",
      "write the next chapter of your life (in blood) by emailing Mark",
      "have an iota of respect for yourself and contact Mark",
      "tell Mark how you really feel",
      "show the world they got you all wrong see, you aint' like the others see, you're gonna email Mark",
      "slide into Mark's DMs",
      "join the financial advice party with just one weird trick",
      "reveal yourself as a fiscal titan",
      "get into bed with the hottest financial advisor in town",
      "just fucking email mark you fucking twat",
    ];

    const message = `Hey ${
      names[Math.floor(Math.random() * names.length)]
    }, why don't you ${
      actions[Math.floor(Math.random() * actions.length)]
    } today, huh?`;

    client.sendTextMessage(tom_room_id, message);

    const hoursLater = Math.ceil(Math.random() * 16);
    setTimeout(messageTom, hoursLater * 60 * 60 * 1000);
    console.log(hoursLater, "hours later");
  };

  client.once("sync", async () => {
    messageTom();
  });
}

startApp();
