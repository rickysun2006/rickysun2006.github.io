import type { Metadata } from "next";
import { SiteNav } from "../site-nav";

export const metadata: Metadata = {
  title: "Misc · Ruqi Sun",
  description:
    "Cats, musical theatre, food, travel, books, Changchun, and writing.",
};

function Photo({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <figure className="misc-figure">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

export default function MiscPage() {
  return (
    <div className="page-wrap">
      <SiteNav />

      <header className="misc-header">
        <h1>Misc</h1>
      </header>

      <section id="cats" className="misc-section">
        <h2>My Cats</h2>
        <p>
          I have two cats. One is <strong>Schrödinger Elizabeth Sun</strong>, and
          the other is <strong>Planck Margaret Yang</strong>.
        </p>
        <p>
          Their names carry several stories. Schrödinger and Planck are named
          after two physicists. I was not particularly good at physics in high
          school, so I hoped the names might bring me a little superstitious
          luck. Elizabeth and Margaret come from Queen Elizabeth II and her
          sister, Princess Margaret. My cats were born in the year Queen
          Elizabeth II died, so I gave them the sisters&rsquo; names as middle
          names. Sun is my family name, and Yang is my mother&rsquo;s.
        </p>
        <p>
          I love them deeply. They helped me understand what unconditional love
          can feel like, and that is also the kind of love I want to give them.
        </p>
        <div className="misc-grid misc-grid--two misc-grid--portrait">
          <Photo
            src="/misc/schrodinger.jpg"
            alt="Schrödinger Elizabeth Sun wearing a pink party hat and bow tie"
            caption="Schrödinger Elizabeth Sun"
          />
          <Photo
            src="/misc/planck.jpg"
            alt="Planck Margaret Yang wearing a pink party hat"
            caption="Planck Margaret Yang"
          />
        </div>
      </section>

      <section id="theatre" className="misc-section">
        <h2>Theatre and Music</h2>
        <p>
          Musical theatre is an important part of my life. I serve as vice
          president and publicity director of the{" "}
          <strong>SUSTech Southern Broadway Musical Club</strong>. I have
          directed selections from <em>Les Misérables</em> and helped organize a
          musical gala at SUSTech attended by more than 600 people. I enjoy
          every part of the process, from rehearsing and promoting a production
          to standing on stage. Most of all, I love watching a group of people
          refine the same performance until something that once existed only in
          our imagination becomes real.
        </p>
        <div className="misc-grid misc-grid--three misc-grid--wide">
          <Photo
            src="/misc/gala.jpg"
            alt="Cast and audience at the SUSTech musical gala"
            caption="The musical gala at SUSTech, attended by more than 600 people."
          />
          <Photo
            src="/misc/les-mis.jpg"
            alt="Four performers on a purple-lit stage in a selection from Les Misérables"
            caption="Selections from Les Misérables, which I directed."
          />
          <Photo
            src="/misc/les-mis-curtain.jpg"
            alt="Performers holding hands during a curtain call"
            caption="Curtain call."
          />
        </div>
        <p>
          My favorite musicals include <em>Les Misérables</em>, <em>Rent</em>,{" "}
          <em>Come From Away</em>, <em>Fan Letter</em>,{" "}
          <em>Dear Evan Hansen</em>, and <em>Hamilton</em>. I also listen to a
          great deal of pop music in
          English, Mandarin, Cantonese, and Japanese. Some of my favorite
          artists are Olivia Rodrigo, Noah Kahan, Rainie Yang, Fujii Kaze, and
          back number. So far, I have attended seven concerts.
        </p>
        <p>
          My favorite song is <em>Hanataba</em> (花束, &ldquo;Bouquet&rdquo;) by
          back number. Two lines from it have stayed with me:
        </p>
        <blockquote className="misc-quote">
          <p>浮気しても言わないでよね</p>
          <p>知らなければ悲しくはならないでしょ</p>
          <p className="misc-quote-en">
            Even if you cheat on me, don&rsquo;t tell me. If I don&rsquo;t know,
            I won&rsquo;t be sad, right?
          </p>
        </blockquote>
      </section>

      <section id="food" className="misc-section">
        <h2>Food and Travel</h2>
        <p>
          I enjoy cooking, and I take eating seriously. I am most comfortable
          making Chinese, Japanese, and Korean dishes, and I have recently begun
          learning baking and pastry. I rarely turn down sashimi, oysters,
          sushi, tonkotsu ramen, or naengmyeon. When I find a good restaurant, I
          like documenting the meal and writing a proper review. Some current
          favorites are Taedonggang Naengmyeon in Changchun, Ichiran in Hong
          Kong and Tokyo, and Toy Soldier in San Francisco.
        </p>
        <div className="misc-grid misc-grid--three">
          <Photo
            src="/misc/naengmyeon.jpg"
            alt="A bowl of cold noodles with egg, beef, and watermelon"
            caption="Taedonggang Naengmyeon, Changchun."
          />
          <Photo
            src="/misc/ichiran.jpg"
            alt="Tonkotsu ramen at Ichiran, with extra noodles and pork"
            caption="Ichiran, Hong Kong."
          />
          <Photo
            src="/misc/oysters.jpg"
            alt="A dozen oysters on ice"
            caption="Oysters at Toy Soldier, San Francisco."
          />
        </div>
        <p>
          Travel gives me another way to understand a place through its streets,
          food, and everyday rhythms. I have visited Hong Kong, Macau, Japan,
          Singapore, the United Kingdom, Ireland, Spain, the United States, and
          many cities across China. I am less interested in treating travel as a
          checklist than in remembering its smaller moments: a meal, a long
          walk, the sound of a city, or an unplanned afternoon that somehow
          stays with me.
        </p>
        <div className="misc-grid misc-grid--four misc-grid--portrait">
          <Photo
            src="/misc/tokyo.jpg"
            alt="Standing on a pedestrian bridge with Tokyo Tower behind"
            caption="Tokyo Tower, Tokyo, Japan."
          />
          <Photo
            src="/misc/fuji.jpg"
            alt="Taking a photo with Mount Fuji in the background"
            caption="Mount Fuji, Japan."
          />
          <Photo
            src="/misc/golden-gate.jpg"
            alt="Standing in front of the Golden Gate Bridge"
            caption="Golden Gate Bridge, San Francisco, United States."
          />
          <Photo
            src="/misc/london.jpg"
            alt="Standing by the fountain in front of the National Gallery in London"
            caption="Trafalgar Square, London, United Kingdom."
          />
        </div>
      </section>

      <section id="books" className="misc-section">
        <h2>Books and Films</h2>
        <p>
          I read mainly in Chinese and English. Some of my favorite works of
          fiction are Pai Hsien-yung&rsquo;s <em>Taipei People</em>,{" "}
          <em>The Guernsey Literary and Potato Peel Pie Society</em>, and Haruki
          Murakami&rsquo;s <em>Norwegian Wood</em>. Among nonfiction, I like Chai
          Jing&rsquo;s <em>Seeing</em>, Michelle Obama&rsquo;s <em>Becoming</em>,
          and Yeonmi Park&rsquo;s{" "}
          <em>In Order to Live: A North Korean Girl&rsquo;s Journey to Freedom</em>.
          My favorite writers are Pai Hsien-yung and Haruki Murakami.
        </p>
        <p>
          In film, I am especially drawn to the work of Ang Lee and Ryusuke
          Hamaguchi. My favorite films are <em>Drive My Car</em> and{" "}
          <em>Brokeback Mountain</em>, and my favorite actor is Hidetoshi
          Nishijima. I am drawn to complex relationships and emotions that move
          quietly beneath the surface. That is one reason <em>Drive My Car</em>{" "}
          means so much to me. Pain and love are rarely spoken directly.
          Instead, they appear through a glance, a shift in tone, a silence, or
          the surrounding space, waiting to be noticed in the details. To me,
          this feels like a distinctly East Asian mode of expression.
        </p>
        <div className="misc-grid misc-grid--four misc-grid--covers">
          <Photo
            src="/misc/norwegian-wood.jpg"
            alt="Cover of Norwegian Wood by Haruki Murakami"
            caption="Norwegian Wood"
          />
          <Photo
            src="/misc/seeing.jpg"
            alt="Cover of Seeing by Chai Jing"
            caption="Seeing"
          />
          <Photo
            src="/misc/drive-my-car.jpg"
            alt="Poster for Drive My Car"
            caption="Drive My Car"
          />
          <Photo
            src="/misc/brokeback.jpg"
            alt="Poster for Brokeback Mountain"
            caption="Brokeback Mountain"
          />
        </div>
      </section>

      <section id="changchun" className="misc-section">
        <h2>Changchun, My Hometown</h2>
        <p>
          I was born in Changchun, where winter temperatures often fall to
          &minus;20&deg;C (&minus;4&deg;F). Northeast China&rsquo;s black soil,
          its long winters, and the language and food of the region have shaped
          my cultural background, habits, and accent. Even when I am far from
          home, small details often remind me where I come from.
        </p>
        <p>
          Changchun has a complex and heavy history. Railway expansion, Japanese
          colonial rule, its period as the capital of the Japanese puppet state
          of Manchukuo, and the Chinese Civil War all left marks on the city.
          After the founding of the People&rsquo;s Republic of China, Changchun
          grew rapidly around automobile manufacturing and later experienced the
          broader industrial transition of Northeast China. To me, Changchun
          cannot be reduced to a single historical narrative, nor is it only a
          city known for cars and cinema. It is where I first learned to
          understand family, culture, and a sense of place.
        </p>
        <p>
          I have tried to turn this connection into something tangible. I
          volunteered as a docent at the Jilin Provincial Museum, where I
          introduced visitors to the intangible cultural heritage of my home
          province. I also worked as a liaison with the local heritage
          practitioner known as Guandong Niren Zhang (关东泥人张), helping
          coordinate and promote his clay figurine work. I can also perform{" "}
          <em>errenzhuan</em>, a folk performance tradition from Northeast China.
          The piece I know best is <em>Xiao Bainian</em> (《小拜年》).
        </p>
        <div className="misc-grid misc-grid--three misc-grid--portrait">
          <Photo
            src="/misc/museum-wall.jpg"
            alt="Standing in front of the Jilin Stories intangible cultural heritage exhibition"
            caption="Jilin Stories, an intangible cultural heritage exhibition at the Jilin Provincial Museum."
          />
          <Photo
            src="/misc/museum-gallery.jpg"
            alt="Standing beside a forest diorama in the museum gallery"
            caption="In the exhibition gallery."
          />
          <Photo
            src="/misc/museum-visitors.jpg"
            alt="Talking with visitors in a red museum volunteer vest"
            caption="Introducing the exhibition to visitors."
          />
        </div>
      </section>

      <section id="writing" className="misc-section">
        <h2>Writing</h2>
        <p>
          I love writing in both Chinese and English. My essays often begin with
          personal experience and move toward questions about undergraduate
          research, HCI, writing and submitting papers, academic collaboration,
          and how researchers make sense of their own work. I also write about
          travel, culture, and everyday life.
        </p>
        <p>
          For me, writing is not simply a way to present conclusions I have
          already reached. Often, I only begin to understand what is troubling
          me through the act of writing. I want to articulate experiences that
          are real but not always easy to discuss, so that something private can
          become a question others can think about together.
        </p>
        <p>
          Most of my Chinese essays are published on{" "}
          <a
            href="https://www.xiaohongshu.com/user/profile/5bdecb1011be100a4cb79b43"
            target="_blank"
            rel="noreferrer"
          >
            RedNote
          </a>
          , where they have received nearly 20,000 likes and attracted more than
          1,000 followers. I have also adapted some of them into English for{" "}
          <a href="https://medium.com/@sunruqi10" target="_blank" rel="noreferrer">
            Medium
          </a>
          . I occasionally write fiction as well, especially romance, horror,
          thrillers, and weird fiction. I am particularly fond of &ldquo;rules
          horror,&rdquo; a Chinese internet fiction genre built around unsettling
          lists of instructions.
        </p>
      </section>

      <footer className="site-footer">
        <a href="mailto:sunrq2024@mail.sustech.edu.cn">
          sunrq2024@mail.sustech.edu.cn
        </a>
      </footer>
    </div>
  );
}
