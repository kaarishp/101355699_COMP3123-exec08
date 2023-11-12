import { Col, Row } from "antd";
import React from "react";

function PreviewData({ data }) {
  console.log(data);
  return (
    <div className="preview-data-container">
      {Object.keys(data).map((key) => (
        <Row key={key} gutter={12} className="data-row">
          <Col span={12} className="data-label">
            <strong>{key}</strong>
          </Col>
          <Col span={12} className="data-value">{data[key]}</Col>
        </Row>
      ))}
    </div>
  );
}

export default PreviewData;
