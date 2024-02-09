import { useState } from "react";
import anh1 from "../src/assets/phaohoa1.gif";
import anh2 from "../src/assets/phaohoa2.gif";
import anh3 from "../src/assets/phaohoa3.gif";
import anh4 from "../src/assets/phaohoa4.gif";
import anh5 from "../src/assets/phaohoa5.gif";
import anh6 from "../src/assets/phaohoa6.gif";
const messages = [
  "Năm cũ qua đi, năm mới đã tới. Chúc bạn bầu trời sức khỏe, biển cả tình thương, đại dương tình bạn, sự nghiệp sáng ngời, gia đình thịnh vượng.",

  "Năm Giáp Thìn 2024 đến rồi, cầu chúc những người thân yêu của tôi có một năm mới hạnh phúc, vui vẻ, ngọt ngào và viên mãn, thành công rực rỡ.",

  "Năm hết Tết đến, rước lộc vào nhà, quà cáp bao la, mọi nhà no đủ, vàng bạc đầy tủ, gia chủ phát tài, già trẻ gái trai, sum vầy hạnh phúc.",

  "Năm 2024 đã tới, thời khắc này, tôi chỉ muốn gửi tới những người thân của mình lời chúc mừng xuân sang, chúc năm mới thịnh vượng. Ai chưa có người yêu thì sớm có, ai chưa thành công sẽ phát triển trong năm nay và đặc biệt luôn dồi dào sức khỏe.",

  " Năm mới 2024 chúc bạn sức khỏe vô biên, kiếm được nhiều tiền, đời sướng như tiên và chẳng ai làm phiền. Happy New Year!",

  "Năm mới, tấn tài tấn lộc, tiền vào phơi phới, cung chúc tân xuân. Chúc mừng năm mới những người thân yêu của tôi. Mong rằng bạn sẽ có một năm Giáp Thìn thật hoành tráng và ý nghĩa.",

  "Nhân dịp năm mới 2024 sắp đến, tôi chúc bạn đáng mến sự nghiệp tiến lên, gặp nhiều điều hên!",

  "Happy New Year 2024! Chúc bạn có một bầu trời sức khỏe, một biển cả tình thương, một đại dương tình bạn, một điệp khúc tình yêu, một người yêu chung thủy, một sự nghiệp sáng ngời, một gia đình thịnh vượng. Chúc cả gia đình bạn vạn sự như ý, tỷ sự như mơ, triệu triệu bất ngờ, không chờ cũng đến!",

  "Chúc mừng năm mới! Năm 2024 sẽ mang lại cho gia đình mình nhiều may mắn, niềm vui và thành công mới.",

  "Xuân đến rồi, đây là thời khắc thiêng liêng nhất. Chỉ mong năm nay mọi sự như ý với bản thân và những người tri kỉ, người thân của mình. Một năm Giáp Thìn trọn vẹn niềm vui và thành công. Chúc mừng năm mới.",

  "Kính chúc một năm mới an lành! Hy vọng mỗi ngày của năm 2024 sẽ mở ra những cánh cửa mới, mang đến cơ hội và niềm vui mới cho chúng ta!",

  "Chúc mừng năm mới! Mong rằng năm 2024 sẽ là một chặng đường mới với những câu chuyện hấp dẫn và niềm vui bất ngờ, tuyệt vời dành cho bạn.",

  "Chúc mừng năm mới 2024, chúc bạn nghìn sự như ý, vạn sự như mơ, triệu sự bất ngờ và tỷ lần hạnh phúc.",

  "Chúc bạn và gia đình một năm mới luôn vui vẻ, hạnh phúc, an khang, phú quý, thái bình. Năm nay gặt hái nhiều thành công hơn nữa nhé bạn. Cung chúc tân xuân!",

  "Chúc bạn sang xuân sự nghiệp hanh thông, tài cao, chí lớn vẫy vùng đó đây, ra ngoài gặp được bạn hiền, quay về gặp được người yêu thương mình.",

  "Cung chúc tân xuân những người bạn của tôi. Chúc cho tình bạn của chúng ta mãi tươi đẹp. Mong rằng năm nay mọi sự như ý, tình duyên phơi phới, tiền bạc đầy nhà, sức khỏe dồi dào. Mong chờ kết quả tốt đẹp của năm Giáp Thìn.",

  "Một năm mới lại đến, chúng ta hãy cùng nâng ly cho một năm đầy thăng tiến trong công việc và thật hạnh phúc trong cuộc sống. Chúc mừng năm Giáp Thìn!",

  "Năm qua đã trải qua nhiều khó khăn thách thức, nhưng chúng ta hãy quên hết muộn phiền để đón một năm mới hanh thông, tràn ngập niềm vui. Chúc cho các bạn của tôi có một năm Giáp Thìn hạnh phúc, vui vẻ và luôn tỏa sáng.",

  "Chúc mọi người năm mới vui vẻ như chim sẻ, khỏe mạnh như đại bàng, giàu sang như chim phụng, làm lụng như chim sâu, sống lâu như đà điểu.",
  "Năm mới đến rồi, chúc cho những người bạn tri kỉ, người thân của tôi luôn hạnh phúc, vui vẻ, viên mãn trong tình yêu, tiền tài công danh, lợi lộc đầy nhà. Mừng năm Giáp Thìn 2024 rực rỡ, tươi sáng.",
];
const pics = [anh1, anh2, anh3, anh4, anh5, anh6];
export default function App() {
  const random = Math.floor(Math.random() * 20);
  const randomPics = Math.floor(Math.random() * 6);
  const [step, setStep] = useState(1);
  const [rand, setRand] = useState(random);
  const [pic, setPic] = useState(randomPics);
  console.log(rand);
  function handlePrevious() {
    if (step > 1) {
      setRand(random);
      setPic(randomPics);
      setStep(step - 1);
    }
  }
  function handleNext() {
    if (step < 3) {
      setRand(random);
      setPic(randomPics);
      setStep(step + 1);
    }
  }
  return (
    <div className="steps">
      <div className="numbers">
        <div className={step >= 1 ? "active" : ""}>1</div>
        <div className={step >= 2 ? "active" : ""}>2</div>
        <div className={step >= 3 ? "active" : ""}>3</div>
      </div>
      <p className="message">
        Chúc bạn:{" "}
        <span style={{ color: "red", fontSize: "20px", marginTop: "10px" }}>
          {messages[rand]}
        </span>
      </p>
      <img
        src={pics[pic]}
        style={{ maxWidth: "70%", textAlign: "center", marginBottom: "20px" }}
        alt="hinh"
      />
      <div className="buttons">
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={handlePrevious}
          // onMouseEnter={() => alert("TEST")}
        >
          {"<"}
        </button>
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={handleNext}
        >
          {">"}
        </button>
      </div>
    </div>
  );
}
