import { useState } from 'react';
import './index.css';

const data = {
  "頭部": {
    "頭痛": {
      "カーボン": ["AA", "AB"],
      "照射": [
        { "部位": "足裏", "時間": "20〜30分" },
        { "部位": "膝", "時間": "10〜20分" },
        { "部位": "ふくらはぎ", "時間": "10分" },
        { "部位": "腹", "時間": "10分" },
        { "部位": "腰", "時間": "10分" },
        { "部位": "背", "時間": "10分" },
        { "部位": "後頭部", "時間": "10分" }
      ]
    },
    "眼精疲労": {
      "カーボン": ["AA", "BB"],
      "照射": [
        { "部位": "目（閉眼）", "時間": "10分" },
        { "部位": "後頭部", "時間": "10分" },
        { "部位": "腹", "時間": "10分" },
        { "部位": "足裏", "時間": "10分" }
      ]
    },
    "耳鳴り": {
      "カーボン": ["AD", "BD"],
      "照射": [
        { "部位": "耳部", "時間": "15〜30分" },
        { "部位": "後頭部", "時間": "10分" },
        { "部位": "鼻", "時間": "10分" },
        { "部位": "喉", "時間": "10分" },
        { "部位": "足裏", "時間": "10分" }
      ]
    }
  },
  "上半身": {
    "肩こり": {
      "カーボン": ["AB", "BB"],
      "照射": [
        { "部位": "頸筋", "時間": "10〜20分" },
        { "部位": "肩", "時間": "10〜20分" },
        { "部位": "背", "時間": "10〜20分" },
        { "部位": "腰", "時間": "10〜20分" }
      ]
    }
  }
};

function App() {
  const [selectedArea, setSelectedArea] = useState(null);
  const [selectedSymptom, setSelectedSymptom] = useState(null);

  const symptoms = selectedArea ? Object.keys(data[selectedArea]) : [];
  const result = selectedArea && selectedSymptom ? data[selectedArea][selectedSymptom] : null;

  return (
    <div className="app">
      <h1 className="title">光線照射アドバイス</h1>

      <div className="description">
        <p>本アプリは、症状に応じて適切な光線照射の部位と時間を案内するセルフケア支援ツールです。</p>

        <h3>■ 使い方</h3>
        <ol>
          <li>まずは「部位」を選択してください（例：頭部、上半身）</li>
          <li>次に、該当する「症状」を選択します</li>
          <li>選択に応じて、照射すべき部位と推奨照射時間、使用カーボンが表示されます</li>
        </ol>

        <h3>■ 注意点</h3>
        <ul>
          <li>本アプリは医療行為を目的としたものではありません</li>
          <li>あくまで参考情報としてご活用ください。症状が続く場合は必ず医師にご相談ください</li>
          <li>表示される照射時間は一般的な目安であり、個人差があります</li>
        </ul>
      </div>

      <div className="section">
        <h2>部位を選択してください</h2>
        <div className="button-group">
          {Object.keys(data).map((area) => (
            <button
              key={area}
              className={`select-button ${selectedArea === area ? 'selected' : ''}`}
              onClick={() => {
                setSelectedArea(area);
                setSelectedSymptom(null);
              }}
            >
              {area}
            </button>
          ))}
        </div>
      </div>

      {selectedArea && (
        <div className="section">
          <h2>症状を選択してください（{selectedArea}）</h2>
          <div className="button-group">
            {symptoms.map((symptom) => (
              <button
                key={symptom}
                className={`select-button ${selectedSymptom === symptom ? 'selected' : ''}`}
                onClick={() => setSelectedSymptom(symptom)}
              >
                {symptom}
              </button>
            ))}
          </div>
        </div>
      )}

      {result && (
        <div className="section result">
          <h2>照射アドバイス：{selectedSymptom}</h2>
          <p><strong>使用カーボン：</strong>{result.カーボン.join(' または ')}</p>
          <ul>
            {result.照射.map((item, index) => (
              <li key={index}>{item.部位}：{item.時間}</li>
            ))}
          </ul>
        </div>
      )}

      <footer className="footer">
  <p>© 2025 Light Therapy App / R </p>
</footer>

    </div>
  );
}

export default App;
