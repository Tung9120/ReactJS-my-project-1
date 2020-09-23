import React from "react";
import { Modal, Button, Empty, Row, Col, Card } from "antd";
import { connect } from "react-redux";
import "./CardOnTop.css";

const { Meta } = Card;

const contentStyle = {
  backgroundImage: `url('http://lorempixel.com/output/city-q-c-560-260-4.jpg')`,
  height: "100px",
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};

class TopCardsPreview extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = (e) => {
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const { topCards } = this.props;
    let topCardData = JSON.parse(topCards);
    return (
      <>
        <Button
          className="my-2"
          type="primary"
          onClick={this.showModal}
          disabled={topCardData === null || topCardData.length < 3}
        >
          Top cards preview
        </Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          {topCardData === null || topCardData.length < 3 ? (
            <Empty />
          ) : (
            <Row gutter={16} className="CardOnTop">
              {topCardData.map((card, index) => (
                <Col span={8} className="col mb-1" key={index}>
                  <Card>
                    <div style={contentStyle}>
                      <Meta
                        title={
                          <h4 className="text-white">
                            {card}
                          </h4>
                        }
                      />
                      <Button type="primary" className="mt-1">
                        Shop Now
                      </Button>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </Modal>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    topCards: state.user.topCards,
  };
}

export default connect(mapStateToProps)(TopCardsPreview);
