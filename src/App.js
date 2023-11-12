import { useState } from "react";
import "./App.css";
import DataEntryForm from "./components/form/DataEntryForm";
import { Col, Row } from "antd";
import PreviewData from "./components/preview/PreviewData";

function App() {
  const [data, setData] = useState({});

  return (
    <div className="App">     
          <h1>Data Entry Form</h1>
            <DataEntryForm data={data} setData={setData} />
      <Row>
        {Object.keys(data).length > 0 && (
          <Col span={12} offset={6}>
            <PreviewData data={data} />
          </Col>
        )}
      </Row>
    </div>
  );
}

export default App;
