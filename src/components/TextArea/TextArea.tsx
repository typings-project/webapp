/**
 * Copyright (c) Cong Nguyen, rebuild based on typings.works idea
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from "react";

const demoContent = [
  '"I am Justice! I protect the innocent and those who fear evil. I\'m the one that will become the god of a new world that everyone desires!" -Light Yagami',
  "I put my wallet on the table while having coffee with Tommy's dad. I look away for 5 minutes and suddenly the little gremlin has run off to my office and booted up my PC.",
  '"Tell me dazai...\n\nWhy is it you wish to die?"\n\n...\n\n"Let\'s turn that question around,\n\nis there really any value to this thing we call living?"',
  "Also! According to YouTube Statistics, only a small percentage of people who watch my videos are actually subscribed\nSo if you end up liking this video, consider subscribing!\nIt's free, and you can always unsubscribe!\nAnyways, enjoy the video",
  "Worthless pride, huh? That's true...\nListen up, Ushijima.\nI've never thought that my choice was a mistake.\nAnd not one bit of my volleyball career is over.\nDon't you ever forget this worthless pride of mine.",
  "\"No matter how ridiculous the odds may seem, within us resides the power to overcome these challenges and achieve something beautiful, and one day, we'll look back at where we started and be amazed by how far we've come.\"",
  "Happy to announce that @dreamwastaken and I are getting married in 2021!\n\nupdate: we kissed",
  '"On that day, mankind received a grim reminder. We lived in fear of the titans, and were disgraced to live in these cages we called walls."',
  '"I don\'t want to be controlled so I cut everything. I lost everything. But I had to lose everything to gain everything."\n\n"How do you not hurt?"',
  "you're american and a minecraft youtuber?? PICK. A. STRUGGLE.",
  "I wanted to tell you. Wherever you are in the world, I swear I'll find you again.",
  '"sayonara america...sayonara new york, but im not going to say sayonara to you, ash.\n\ni know we will meet again, no matter how far away we are.\n\nyou are the best friend i have ever had."\n\n-eiji okumura',
  "You can make a movement. You can make a resistance, right? You can go out and you can come back, and they'll give you a ticker tape parade. They'll cheer for you in the streets, but you will change nothing.",
  'Before my eyes, it blocks my path. A high, high wall. What sort of scene is on the other side? What will I be able to see there? "The view from the top." A scenery I will never be able to see on my own. But if I\'m not alone, then... I might be able to see it.',
  "\"TommyInnit, I am a slow-burning fuse. I am a long, slow-burning fuse, but I'm telling you now, over the next couple weeks, I... I'm gonna be a different man than the one JSchlatt crossed. I can feel it. And maybe this new man will be open to ... a Technoblade.\"",
  '"Look! I told you, Eren! A salt lake so big that merchants could spend their whole lives\nand still not get all the salt. The stuff I talked about wasn\'t wrong after all!"\n\n- Armin Arlert',
  "So, I guess we are who we are for a lot of reasons. And maybe we'll never know most of them. But even if we don't have the power to choose where we come from, we can still choose where we go from there. We can still do things. And we can try to feel okay about them.",
  "If we only focus on making the best moves, we will never get the better of our opponent. When necessary, we must be willing to take big risks, and be prepared to lose everything. Unless we change how we fight, we cannot win.",
  "\"There was a saying Phil. By a traitor, once part of L'manburg. A traitor. I don't know if you ever heard of Eret. He had a saying Phil... It was never meant to be\"",
  "Tell me Dazai, why is it you wish to die?\nLet's turn that question around. Is there really any value, to this thing we call living?",
  "My Twitter feed's like my brain\n'Cause I have it on dark mode\nMemorise everything she says\nSo I can use it to guess her passcode\nShe's beauty, she's grace",
  '"Talent is something you make bloom, instinct is something you polish"\n- Oikawa Tooru',
  "I don't mind if I only had one person. Even if the whole world hated me, I could keep living if that person needed me.",
  "Please God, give me one more ounce of strength! I won't run away from my problems anymore! Just do this one thing for me, please, help me save Shoko! Starting tomorrow, I'll listen when people speak to me! Starting tomorrow, I will do better, better than I have ever done before!",
  '"Maybe...just maybe,\nthe light can reach even the bottom of a dark ocean."',
  'Remember. We are blood. Never stop flowing. Keep moving. Keep bringing oxygen so that our "brain" can operate at his best.',
  "Kissing is just when you pogchamp really close to each other",
  "Pizza, has got lumps in it.\nThe lumps are hard with nuts.\nI didn't want a nutty pizza today.\nCuz I'm allergic to nuts!",
  "I sewed the seeds of peace, and yet i am the one who pays for war.",
  "My dearest friend Wilbur,\nYou were right all along.\n\nAnd I won't make the same mistakes twice.",
  "in britain we dont with these bull shit elections,we just have a queen that doesnt die",
  '"Would you be willing to join me on a double suicide?"\n\n- Osamu Dazai',
  "Spring will be here soon.\nSpring, the season I met you, is coming.\nA spring without you...\n...is coming.\n-Kosei Arima",
  '"In a time like this, when a man has nothing to lose, d\'yknow what that means? It means we can do what we want," -Wilbur',
  '"I wanna see white flags! White flags! Outside your base, by tomorrow, at dawn or you are dead!"',
  '"I\'m not going to kill you.\nBut im going to make your last days in this prison\nfucking\nhell."',
  '"In this world, there are very few people who actually trust each other."',
  "If respect is the only thing protecting you from a knife in the back... Respect is nothing, right?",
  '"Sorry for sending you the hot dragon from Shrek. Are you a communist btw?"\n\n- A Dono on Ranboo\'s Stream',
  "I can afford to lose a little bit of life, if it means others can live.",
  '"I\'m gonna come here every single, FUCKING DAY to make your life HELL"',
  '"You can\'t change anything unless you discard a part of yourself too. To surpass monsters, you must be willing to abandon your humanity."',
  "People tell me their secrets all the time. I think it's because they know I have no one to betray them to.",
  '"Talent is something you make bloom, instinct is something you polish."',
  "So, this is my life. And I want you to know that I am both happy and sad and I'm still trying to figure out how that could be.",
  "She fills her office with color to remind her to smile as the horror fills her screens.",
  "We girls gotta stick together, we can't trust men. We learned that today.",
  "Nine out of ten doctors recommend you stop being a little bitch\n\nsorry...",
  '"If we only focus on making the best moves, we will never get the better of our opponent. When necessary, we must be willing to take big risks, and be prepared to lose everything. Unless we change how we fight, we cannot win."',
  "\"Techno, if this is what I've become, then I don't want to be me anymore.\"\n\n- Tommyinnit",
  "You told me once about a leopard you read in a book. How you believed that the leopard knew that it couldn't go back.\nAnd I said you weren't a leopard, that you could change your destiny.\n\nYou're not alone. I'm by your side.\nMy soul is always with you.",
];

interface Props {
  nowRef?: React.RefObject<HTMLElement>;
  nextRef?: React.RefObject<HTMLElement>;
}

export const TextArea = (props: Props) => {
  const { nowRef, nextRef } = props;

  const [selectedContentIndex, setSelectedContentIndex] = React.useState(0);

  const inputRef = React.useRef(null);
  const [focused, setFocused] = React.useState(false);

  React.useEffect(() => {
    null !== inputRef.current && inputRef.current.focus();
  }, [inputRef]);

  const detectChar = (e) => {
    const n = [];
    const t = (n) => {
      return e.charCodeAt(n) - 44032;
    };

    for (let r = 0; r < e.length; r++) {
      const a = t(r) % 28,
        o = ((t(r) - a) / 28) % 21,
        c = ((t(r) - a) / 28 - o) / 21,
        i = e.charCodeAt(r);
      if (c >= 0) {
        [1, 4, 8, 10, 13].includes(c) && n.push(c), n.push(c);
      }
      if (o >= 0) {
        [3, 7, 9, 10, 11, 14, 15, 16, 19].includes(o) && n.push(o), n.push(o);
      }
      if (
        a > 0 &&
        [2, 3, 5, 6, 9, 10, 11, 12, 13, 14, 15, 18, 20].includes(a)
      ) {
        n.push(a);
        n.push(a);
      }
      if (a < 0 || 44 === i) {
        [12594, 12600, 12611, 12614, 12617].includes(i) && n.push(i), n.push(i);
      }
    }
    return n.length;
  };

  const [collect, setCollect] = React.useState({
    status: false,
    speed: {
      word: 0,
      character: 0,
    },
    accuracy: 100,
  });

  const [charBlocks, setCharBlocks] = React.useState({
    language: "en",
    start: null,
    end: null,
    progress: null,
    character: [],
    word: [],
    paragraph: [],
  });

  const collectRef = React.useRef(null);

  React.useEffect(() => {
    collectRef.current = () => {
      if (charBlocks) {
        const now = new Date().getTime();

        const { language, start, character, word, end } = charBlocks;

        const m = character
          .map(function (e) {
            return e.input;
          })
          .filter(function (e) {
            return e;
          })
          .join("");

        const d = {
          char: character
            .map(function (e) {
              return e.wrong;
            })
            .filter(function (e, n) {
              return n < m.length && e.past;
            }).length,
          word: "",
        };

        const p = {
          all:
            character.map(function (e) {
              return e.output;
            }).length - 1,
          char: detectChar(m),
          word:
            m.length <= 1
              ? 0
              : word
                  .map(function (e) {
                    return e.end;
                  })
                  .filter(function (e) {
                    return e <= m.length;
                  }).length,
        };

        if (start === null) {
          return;
        }

        if (0 === m.length) {
          return setCollect({
            ...collect,
            status: false,
          });
        }

        const b = (now - start) / 1000;
        const g = {
          wpm: Math.round((p.word / b) * 60),
          cpm: Math.round((p.char / b) * 60),
        };
        const h = {
          wcc: 0,
          ccc: Math.floor(100 - (d.char / p.all) * 100),
        };

        if (m.length >= p.all && null !== end)
          return setCollect({
            ...collect,
            status: false,
          });

        setCollect({
          ...collect,
          status: true,
          speed: {
            word: g.wpm,
            character: g.cpm,
          },
          accuracy: h.ccc,
        });
      }
    };
  }, [charBlocks, detectChar, collect, setCollect]);

  React.useEffect(
    function () {
      if (null !== collectRef.current) {
        const e = function () {
          collectRef.current();
        };
        return (
          window.setInterval(e, 100),
          function () {
            return window.clearInterval(e);
          }
        );
      }
    },
    [100],
  );

  // we will process content for every change selected index
  React.useEffect(() => {
    const testContent = demoContent[selectedContentIndex];

    const i = testContent.split(/\s/g);
    const l = testContent.split(/\n|\r\n/g);

    const _tempCharBlocks = {
      language: "en",
      start: null,
      end: null,
      progress: null,
      character: [],
      word: [],
      paragraph: [],
    };

    for (let i = 0; i < testContent.length; i++) {
      const charInfo = {
        input: null,
        value: testContent[i],
        n_value: void 0 !== testContent[i + 1] ? testContent[i + 1] : "",
        past: false,
        now: false,
        next: false,
        wrong: {
          past: false,
          now: null,
        },
        space:
          null !== testContent[i].match(/\s/g) &&
          null === testContent[i].match(/\n|\r\n/g),
        enter: null !== testContent[i].match(/\n|\r\n/g),
      };

      _tempCharBlocks.character.push(charInfo);
    }

    for (let m = 0; m < i.length; m++) {
      const d = [];
      const p = [];
      for (let b = 0; b < testContent.length; b++) {
        if (0 === b) {
          d.push(b);
        }

        if (testContent[b].match(/\s/g)) {
          d.push(b + 1);
          p.push(b);
        }

        if (b === testContent.length - 1) {
          p.push(b);
        }
      }

      const g = {
        value: i[m],
        start: d[m],
        end: p[m],
      };

      _tempCharBlocks.word.push(g);
    }

    const v = [];
    const O = [];

    for (let h = 0; h < l.length; h++) {
      for (let j = 0; j < testContent.length; j++) {
        if (0 === j) {
          v.push(j);
        }

        if (testContent[j].match(/\n|\r\n/g)) {
          v.push(j + 1);
          O.push(j);
        }

        if (j === testContent.length - 1) {
          O.push(j);
        }
      }
      const x = {
        value: l[h],
        start: v[h],
        end: O[h],
      };
      _tempCharBlocks.paragraph.push(x);
    }

    setCharBlocks(_tempCharBlocks);
  }, [selectedContentIndex]);

  // TODO: BUG FIX - some time collect state is reset failed
  React.useEffect(() => {
    setCollect({
      ...collect,
      status: false,
      speed: {
        word: 0,
        character: 0,
      },
      accuracy: 100,
    });

    if (null !== inputRef.current) {
      inputRef.current.focus();
      inputRef.current.value = "";
      inputRef.current.style = "";
    }
  }, [selectedContentIndex]);

  const changeContent = React.useCallback(() => {
    setSelectedContentIndex(
      selectedContentIndex === demoContent.length
        ? 0
        : selectedContentIndex + 1,
    );
  }, [selectedContentIndex, setSelectedContentIndex]);

  const handleChange = React.useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      const value = event.target.value;

      if (value.length >= charBlocks.character.length) {
        event.target.value = event.target.value.slice(
          0,
          charBlocks.character.length,
        );
      }

      const now = new Date().getTime();

      try {
        const newCharsInfo = Object.assign({}, charBlocks, {
          start: value.length <= 1 ? now : charBlocks.start,
          end: value.length >= charBlocks.character.length ? now : null,
          progress: Math.round(
            (value.length / charBlocks.character.length) * 100,
          ),
          character: charBlocks.character.map(function (e, n) {
            return n >= 0
              ? Object.assign({}, e, {
                  input: n < value.length ? value[n] : null,
                  _ed: !e.next && n < value.length - 1,
                  _edvalue: !e.next && n < value.length - 1 ? value[n] : null,
                  past: n < value.length - 1,
                  now: n === value.length - 1,
                  next: n === value.length,
                  wrong: Object.assign({}, e.wrong, {
                    past:
                      !(n >= value.length - 1) &&
                      e.value !== e.input &&
                      (!e.value.match(/\s/g) || !e.input.match(/\s/g)),
                    now:
                      n === value.length - 1
                        ? "ko" === charBlocks.language
                          ? e._ed
                            ? e.value === e.input
                            : lv({
                                in: value[n],
                                out: e.value,
                                next:
                                  null !==
                                  e.n_value.match(
                                    /[\u3131-\u314e|\u314f-\u3163|\uac00-\ud7a3]/g,
                                  )
                                    ? e.n_value
                                    : "",
                              })
                          : value[n] === e.value ||
                            !(!value[n].match(/\s/g) || !e.value.match(/\s/g))
                        : null,
                  }),
                  check:
                    e.value.match(/\s/g) && n === value.length - 1
                      ? uv({
                          array: e.check,
                          value: value[n],
                        })
                      : n < value.length - 1
                      ? []
                      : null,
                })
              : e;
          }),
        });

        setCharBlocks(newCharsInfo);
      } catch (error) {}
    },
    [charBlocks],
  );

  if (!charBlocks) {
    return null;
  }

  return (
    <div className="container">
      <div
        style={{
          marginBottom: 12,
          color: "#888",
        }}
      >
        <p>
          Copyright Cong Nguyen. Rebuild based on typings.works's idea. We're
          planning to make this project open source. If you want to join, inbox
          me{" "}
          <a
            href="https://www.facebook.com/congnguyen020/"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          !
        </p>
      </div>
      <div className="stats">
        <div className="stats-block">
          <div>{`WPM: ${collect.speed.word}`}</div>
          <div className="stats-block--description">Words Per Minute</div>
        </div>
        <div className="stats-block">
          <div>{`CPM: ${collect.speed.character}`}</div>
          <div className="stats-block--description">Characters Per Minute</div>
        </div>
        <div className="stats-block">
          <div>{`ACC: ${collect.accuracy}`}</div>
          <div className="stats-block--description">Accuracy</div>
        </div>
      </div>
      <div className="toolbar">
        <button onClick={changeContent}>Change content</button>
      </div>
      <div
        className="typing--area"
        onClick={(event) => {
          return event && inputRef.current.focus();
        }}
      >
        <textarea
          ref={inputRef}
          className="textarea"
          placeholder="This placeholder will disappear when content loaded"
          onChange={handleChange}
          spellCheck={false}
          onFocus={() => {
            return setFocused(true);
          }}
          onBlur={() => {
            return setFocused(false);
          }}
        />
        {charBlocks.paragraph.map((paragraph, index) => {
          return (
            <ul key={`paragrap_${index}`}>
              {charBlocks.word.map((word, wIndex: number) => {
                return (0 === paragraph.start && word.end <= paragraph.end) ||
                  (word.start >= paragraph.start &&
                    word.end <= paragraph.end) ? (
                  <li key={`p__${index}__w__${wIndex}`}>
                    {charBlocks.character.map((character, cIndex) => {
                      return (0 === word.start && cIndex <= word.end) ||
                        (cIndex >= word.start && cIndex <= word.end) ? (
                        <span
                          key={`p__${index}__w__${wIndex}__c__${cIndex}`}
                          ref={
                            character.now
                              ? nowRef
                              : (0 === cIndex && !character.input) ||
                                character.next
                              ? nextRef
                              : null
                          }
                          className={
                            focused && 0 === cIndex && !character.input
                              ? "isNext"
                              : character.past
                              ? character.wrong.past
                                ? "isPast wrong"
                                : "isPast"
                              : character.now
                              ? "isNow"
                              : character.next
                              ? "isNext"
                              : null
                          }
                        >
                          {character.value}
                          {character.past && character.wrong.past
                            ? character.space
                              ? ov({
                                  name: "past space wrong",
                                })
                              : character.enter
                              ? ov({
                                  name: "past enter wrong",
                                })
                              : null
                            : null}
                          {character.now
                            ? character.wrong.now
                              ? character.space
                                ? ov({
                                    name: "now space",
                                  })
                                : character.enter
                                ? ov({
                                    name: "now enter",
                                  })
                                : ov({
                                    name: "now",
                                    value: character.input,
                                  })
                              : character.space
                              ? ov({
                                  name: "now space wrong",
                                })
                              : character.enter
                              ? ov({
                                  name: "now enter wrong",
                                })
                              : ov({
                                  name: "now wrong",
                                  value: character.input,
                                })
                            : null}
                          {focused
                            ? 0 !== cIndex || character.input
                              ? character.next
                                ? character.space
                                  ? ov({
                                      name: "caret space",
                                    })
                                  : character.enter
                                  ? ov({
                                      name: "caret enter",
                                    })
                                  : ov({
                                      name: "caret",
                                    })
                                : null
                              : ov({
                                  name: "caret",
                                })
                            : null}
                          {(character.space || character.enter) &&
                            character.check &&
                            character.check.length > 0 &&
                            cv({
                              name: "blank_check",
                              arr: character.check,
                              type: {
                                space: character.space,
                                enter: character.enter,
                              },
                              size: 25,
                            })}
                        </span>
                      ) : null;
                    })}
                  </li>
                ) : null;
              })}
            </ul>
          );
        })}
      </div>
    </div>
  );
};

const cv = function (e) {
  const n = e.name,
    t = e.arr,
    r = e.type,
    a = e.size,
    c = ["#de1300", "#f72c19", "#ff5647", "#ff7b6e", "#fd9c93", "#ffc3bd"];

  return (
    <span
      className={n}
      style={{
        width: r.enter ? a / 5 : "100%",
      }}
    >
      {t.map(function (e, n) {
        return (
          <span
            key={n}
            style={{
              height: a / (10 - n),
              background: c[n],
            }}
          />
        );
      })}
    </span>
  );
};

const ov = function (props: { name: string; value?: string }) {
  const { name, value } = props;

  return <span className={name}>{value && value}</span>;
};

// TODO: this is function to work with korean, chinese, japanese text
const lv = function (e) {
  var n = !1,
    t = !1,
    r = {
      in: e.in,
      out: e.out,
      fh: "",
      sh: "",
      th: "",
    },
    a = e.in,
    o = e.out,
    c = e.next;
  if (a.match(/\s/g) && o.match(/\s/g)) return (n = !0);
  if (null === o.match(/[\u3131-\u314e|\u314f-\u3163|\uac00-\ud7a3]/g))
    return (n = a === o);
  var i = function (e) {
      return "" !== e && e ? e.charCodeAt(0) : null;
    },
    l = function (e) {
      return "" !== e && e ? e.charCodeAt(0) - 44032 : null;
    },
    u = l(a),
    s = l(o),
    f = l(c),
    m = function (e) {
      return e % 28;
    },
    d = function (e) {
      return ((e - m(e)) / 28) % 21;
    },
    p = function (e) {
      return null === e ? null : ((e - m(e)) / 28 - d(e)) / 21;
    },
    b = [
      "\u3131",
      "\u3132",
      "\u3134",
      "\u3137",
      "\u3138",
      "\u3139",
      "\u3141",
      "\u3142",
      "\u3143",
      "\u3145",
      "\u3146",
      "\u3147",
      "\u3148",
      "\u3149",
      "\u314a",
      "\u314b",
      "\u314c",
      "\u314d",
      "\u314e",
    ],
    g = [
      "",
      "\u3131",
      "\u3132",
      "\u3133",
      "\u3134",
      "\u3135",
      "\u3136",
      "\u3137",
      "\u3139",
      "\u313a",
      "\u313b",
      "\u313c",
      "\u313d",
      "\u313e",
      "\u313f",
      "\u3140",
      "\u3141",
      "\u3142",
      "\u3144",
      "\u3145",
      "\u3146",
      "\u3147",
      "\u3148",
      "\u314a",
      "\u314b",
      "\u314c",
      "\u314d",
      "\u314e",
    ];
  if (i(b[p(s)]) === i(a)) n = !0;
  else if (p(s) === p(u)) {
    if (((n = !0), d(s) !== d(u))) {
      (function () {
        var e = [8, 9, 10, 11],
          n = [13, 14, 15, 16],
          t = [18, 19];
        return e.includes(d(s))
          ? e[0]
          : n.includes(d(s))
          ? n[0]
          : t.includes(d(s))
          ? t[0]
          : null;
      })() === d(u)
        ? ((n = !0), 0 !== m(u) && d(s) !== d(u) && (n = !1))
        : (n = !1);
    } else if (d(s) === d(u))
      if (((n = !0), m(s) <= 0)) {
        t = !1;
        var h = b[p(f)],
          v = g[m(u)];
        h === v || (void 0 === h && "" === v)
          ? (n = !0)
          : 0 !== m(u) && (n = !1);
      } else t = !0;
  } else n = !1;
  if (t) {
    if (
      [
        "",
        "\u3131",
        2,
        3,
        "\u3134",
        5,
        6,
        "\u3137",
        "\u3139",
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        "\u3141",
        "\u3142",
        18,
        "\u3145",
        20,
        "\u3147",
        "\u3148",
        "\u314a",
        "\u314b",
        "\u314c",
        "\u314d",
        "\u314e",
      ].includes(m(s))
    )
      if (m(s) !== m(u)) {
        var O = (function (e) {
          var n = [1, 3],
            t = [4, 5, 6],
            r = [8, 9, 10, 11, 12, 13, 14, 15],
            a = [17, 18];
          return n.includes(e)
            ? n[0]
            : t.includes(e)
            ? t[0]
            : r.includes(e)
            ? r[0]
            : a.includes(e)
            ? a[0]
            : null;
        })(m(s));
        m(u) > 0 && (O === m(u) ? (n = !0) : O !== m(u) && (n = !1));
      } else n = !0;
    else if (
      [1, 4, 7, 8, 16, 17, 19, 21, 22, 23, 24, 25, 26, 27].includes(m(s)) &&
      m(u) > 0
    ) {
      var j = b[p(f)];
      m(s) === m(u)
        ? (n = !0)
        : m(s) !== m(u) &&
          (n =
            1 === m(s)
              ? ("\u3145" === j && 3 === m(u)) || 1 === m(u)
              : 4 === m(s)
              ? "\u3148" === j
                ? 5 === m(u) || 4 === m(u)
                : ("\u314e" === j && 6 === m(u)) || 4 === m(u)
              : 8 === m(s)
              ? "\u3131" === j
                ? 9 === m(u) || 8 === m(u)
                : "\u3141" === j
                ? 10 === m(u) || 8 === m(u)
                : "\u3142" === j
                ? 11 === m(u) || 8 === m(u)
                : "\u3145" === j
                ? 12 === m(u) || 8 === m(u)
                : "\u314c" === j
                ? 13 === m(u) || 8 === m(u)
                : "\u314d" === j
                ? 14 === m(u) || 8 === m(u)
                : ("\u314e" === j && 15 === m(u)) || 8 === m(u)
              : 17 === m(s) &&
                (("\u3145" === j && 18 === m(u)) || 17 === m(u)));
    }
  }
  return (
    void 0 === b[p(u)] ? (r.fh = a) : (r.fh = b[p(u)]),
    (r.sh = [
      "\u314f",
      "\u3150",
      "\u3151",
      "\u3152",
      "\u3153",
      "\u3154",
      "\u3155",
      "\u3156",
      "\u3157",
      "\u3158",
      "\u3159",
      "\u315a",
      "\u315b",
      "\u315c",
      "\u315d",
      "\u315e",
      "\u315f",
      "\u3160",
      "\u3161",
      "\u3162",
      "\u3163",
    ][d(u)]),
    (r.th = g[m(u)]),
    e.imm ? r : n
  );
};

// this is function to work with korean, chinese, japanese text
const uv = function (e) {
  var n = e.array,
    t = e.value;
  if (null === t.match(/[\u3131-\u314e|\u314f-\u3163|\uac00-\ud7a3]/g))
    return null;
  var r = function (e) {
      return "" !== e && e ? e.charCodeAt(0) - 44032 : null;
    },
    a = function (e) {
      return e % 28;
    },
    o = function (e) {
      return null === e
        ? null
        : ((e - a(e)) / 28 -
            (function (e) {
              return ((e - a(e)) / 28) % 21;
            })(e)) /
            21;
    };
  if (!n) {
    if (o(r(t)) < 0) return [t];
    return [
      [
        "\u3131",
        "\u3132",
        "\u3134",
        "\u3137",
        "\u3138",
        "\u3139",
        "\u3141",
        "\u3142",
        "\u3143",
        "\u3145",
        "\u3146",
        "\u3147",
        "\u3148",
        "\u3149",
        "\u314a",
        "\u314b",
        "\u314c",
        "\u314d",
        "\u314e",
      ][o(r(t))],
      t,
    ];
  }
  return n.includes(t)
    ? n.filter(function (e, t) {
        return t < n.length - 1;
      })
    : n.concat(t);
};
