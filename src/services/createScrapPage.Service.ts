import puppeteer from "puppeteer";
import fs from "fs";
import { write as csvWriter } from "fast-csv";

async function scrap() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  //Permições
  //Ref: https://medium.com/@jsoverson/how-to-bypass-access-denied-pages-with-headless-chrome-87ddd5f3413c
  await page.setUserAgent(
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.75 Safari/537.36"
  );

  await page.goto(
    "https://www.maccosmetics.com.br/product/13847/1231/produtos/maquiagem/rosto/base/base-fluida-studio-fix-com-fps-15"
  );

  const results = await page.evaluate(() => {
    const nodeList = document.querySelectorAll(
      "div.product-full__shade-swatch"
    );
    const ImgArray = [...nodeList];

    return ImgArray.map((item) => {
      const itemColor = item.getAttribute("style");
      const [_, color] = String(itemColor).split(":");
      return { color };
    });
  });

  browser.close();

  const outputFile = fs.createWriteStream("./src/tmp/out.csv");
  csvWriter(results, { headers: true }).pipe(outputFile);
}

export default scrap;
