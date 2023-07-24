import satori, { SatoriOptions } from "satori";
import { SITE } from "@config";
import { writeFile } from "node:fs/promises";
import { Resvg } from "@resvg/resvg-js";

const fetchFonts = async () => {
  // Regular Font
  const fontFileRegular = await fetch(
    "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@500&family=Noto+Sans:wght@100&display=swap"
  );
  const fontRegular: ArrayBuffer = await fontFileRegular.arrayBuffer();

  // Bold Font
  const fontFileBold = await fetch(
    "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@800&family=Noto+Sans:wght@100&display=swap"
  );
  const fontBold: ArrayBuffer = await fontFileBold.arrayBuffer();

  return { fontRegular, fontBold };
};

const { fontRegular, fontBold } = await fetchFonts();

const ogImage = (text: string) => {
  return (
    <div
      style={{
        background: "#fefbfb",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-1px",
          right: "-1px",
          border: "4px solid #000",
          background: "#ecebeb",
          opacity: "0.9",
          borderRadius: "4px",
          display: "flex",
          justifyContent: "center",
          margin: "2.5rem",
          width: "88%",
          height: "80%",
        }}
      />

      <div
        style={{
          border: "4px solid #000",
          background: "#fefbfb",
          borderRadius: "4px",
          display: "flex",
          justifyContent: "center",
          margin: "2rem",
          width: "88%",
          height: "80%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            margin: "20px",
            width: "90%",
            height: "90%",
          }}
        >
          <p
            style={{
              fontSize: 72,
              fontWeight: "bold",
              maxHeight: "84%",
              overflow: "hidden",
            }}
          >
            {text}
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              marginBottom: "8px",
              fontSize: 28,
            }}
          >
            <span>
              by{" "}
              <span
                style={{
                  color: "transparent",
                }}
              >
                "
              </span>
              <span style={{ overflow: "hidden", fontWeight: "bold" }}>
                {SITE.author}
              </span>
            </span>

            <span style={{ overflow: "hidden", fontWeight: "bold" }}>
              {SITE.title}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const options: SatoriOptions = {
  width: 1200,
  height: 630,
  embedFont: true,
  fonts: [
    {
      name: "Noto Sans Japanese",
      data: fontRegular,
      weight: 500,
      style: "normal",
    },
    {
      name: "Noto Sans Japanese",
      data: fontBold,
      weight: 800,
      style: "normal",
    },
  ],
};

const generateOgImage = async (mytext = SITE.title) => {
  const svg = await satori(ogImage(mytext), options);

  // render png in production mode
  if (import.meta.env.MODE === "production") {
    const resvg = new Resvg(svg);
    const pngData = resvg.render();
    const pngBuffer = pngData.asPng();

    console.info("Output PNG Image  :", `${mytext}.png`);

    await writeFile(`./dist/${mytext}.png`, pngBuffer);
  }

  return svg;
};

export default generateOgImage;
