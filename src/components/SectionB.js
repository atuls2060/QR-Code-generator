import React from "react";
import { QRCodeCanvas } from "qrcode.react";

const SectionB = ({ colors, size, url }) => {
  function downloadHandler() {
    let canvas = document.querySelector("#qr-code canvas");
    let img = canvas.toDataURL();
    let link = document.createElement("a");
    link.href = img;
    link.download = "image/jpeg";
    link.click();
  }

  return (
    <section className="section-b" id="section-b">
      <h3>QR will be generated here</h3>
      <div className="qr-code" id="qr-code">
        <QRCodeCanvas
          value={url.trim() === "" ? "QR-Code-by-atul" : url}
          size={Number(size)}
          bgColor={colors.bgColor}
          fgColor={colors.fgColor}
          x={Number(20)}
          y={Number(20)}
          includeMargin={true}
        />
      </div>
      <button onClick={downloadHandler}>Download</button>
    </section>
  );
};

export default SectionB;
