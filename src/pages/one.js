import React from 'react';
import styled from 'styled-components'
import { Carousel, Input, Divider } from 'antd';
import 'antd/dist/antd.css'
import Logo from '../images/logo.png'
import bizi from '../images/bizi.jpg'
import lian from '../images/lian.jpg'
import yanjing from '../images/yanjing.jpg'
import Activity_1 from '../images/Activity_1.jpg'
import Activity_2 from '../images/Activity_2.jpg'
import Activity_3 from '../images/Activity_3.jpg'
import Activity_4 from '../images/Activity_4.jpg'

import { SearchOutlined } from '@ant-design/icons';

const { Search } = Input;

const OneWrapper = styled.div`
.One_title{
  color:#CBA794;
  display:flex;
  align-items:center;
  padding: 10px;

  img{
    width:36px;
    height:36px;
    border:2px solid #CBA794;
    padding:2px;
    border-radius:2px;
    box-sizing:border-box;
    margin:0 5px;
  }
  p{
    display:flex;
    flex-direction:column;
    align-items: flex-start;
    justify-content:center;
    margin:0;
    .p_top{
      font-size:20px;
    }
    .p_tom{
      font-size:12px;
    }
  }
}
.One_tabs{
  display:flex;
  align-items:center;
  width:100vw;
  padding:10px;
  justify-content:center;
  ul,li{ padding:0;margin:0;list-style:none}
  ul{
    width:100vw;
    display:flex;
  align-items:center;
  flex-direction:row;
  justify-content:space-around;
    li{
      width:18vw;
      height:18vw;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      background:#CBA794;
      color:#ffffff;
      font-size:14px;

    }
  }
}
.One_carousel{
  img{
    
    width:100vw;
    /* height:160px; */
    background:no-repeat;
  }
  .ant-carousel .slick-slide {
  text-align: center;
  /* height: 160px; */
  /* line-height: 160px; */
  /* background: #364d79; */
  overflow: hidden;
}
.ant-carousel .slick-dots-bottom {
    bottom: 1px;
}
}
.One_search{
  display:flex;
  padding:10px;
 
  .ant-btn-primary{
    background:#CBA794;
    border:none;
  }
  .One_search_right{
    background:#CBA794;
    width:80px;
    height:32px;
    color:#ffffff;
    border-radius:0 4px 4px 0;
    line-height:34px;
  }
}

.One_xiangmu{
  ul,li{ padding:0;margin:0;list-style:none}
  ul{
    img{
    
    width:100vw;
    height:80px;
    /* background:no-repeat; */
  }
    li{
      display:flex;
      flex-direction:row-gap;
      padding: 10px;
      img{
        width:64px;
        height:64px;
      }
      .One_xiangmu_right{
        margin-left:10px;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items: flex-start;
        .One_xiangmu_right_title{
          color:#CBA794;

        }
        .One_xiangmu_right_btm{
          display:flex;
          flex-direction:row;
          flex-wrap:wrap;
        }
      }
    }
  }
}
.Activity {
    float: left;
    width: 100%;
    height: auto;
    position: relative;
    overflow: hidden;
    .Activity_1 {
    float: left;
    width: 100%;
    height: auto;
}
.h4 {
    width: 24.6%;
    position: absolute;
    left: 12.8%;
    font-size: 1.2em;
    line-height: 3.4em;
    margin: 0;
    padding: 0;
}
.f1 {
    width: 35.4%;
    position: absolute;
    top: 21.6%;
    text-align: center;
    left: 6%;
    font-size: .85em;
    color: #fff;
    font-weight: bold;
}
.f2 {
    width: 33.4%;
    position: absolute;
    top: 21%;
    left: 42%;
    font-size: .85em;
    text-align: center;
    color: #fff;
    font-weight: bold;
}
.f3 {
    width: 33.4%;
    position: absolute;
    top: 27.6%;
    left: 67.6%;
    font-size: .85em;
    text-align: center;
    color: #fff;
    font-weight: bold;
    line-height: 2em;
}
.f4 {
    width: 33.4%;
    position: absolute;
    top: 45.5%;
    text-align: center;
    left: 8%;
    font-size: .85em;
    color: #fff;
    font-weight: bold;
}
.f5 {
    width: 23.4%;
    position: absolute;
    top: 45.5%;
    left: 47%;
    font-size: .85em;
    color: #fff;
    font-weight: bold;
    text-align: center;
}
.f6 {
    width: 20%;
    position: absolute;
    top: 66.5%;
    left: 4%;
    font-size: .75em;
    color: #fff;
    font-weight: bold;
    text-align: center;
}
.f7 {
    width: 33.4%;
    position: absolute;
    top: 66.5%;
    left: 18%;
    font-size: .85em;
    color: #fff;
    font-weight: bold;
    text-align: center;
}
.f8 {
    width: 23.4%;
    position: absolute;
    top: 66.5%;
    left: 47.6%;
    font-size: .85em;
    color: #fff;
    font-weight: bold;
    text-align: center;
}
.f9 {
    width: 20%;
    position: absolute;
    top: 64.5%;
    left: 75%;
    font-size: .85em;
    color: #fff;
    font-weight: bold;
    text-align: center;
}
}
`
function One () {
  return (
    <OneWrapper>
      <div className="One_title">
        <img src={Logo} alt=""></img>
        <p>
          <div className="p_top">东湖珏美医疗美容门诊部</div>
          <div className="p_tom">Donghu Juemai Medical Beauty Clinic</div>
        </p>
      </div>
      <div className="One_tabs">
        <ul>
          <li>我要挂号</li>
          <li>医院简介</li>
          <li>医疗项目</li>
          <li>医疗团队</li>
          <li>咨询客服</li>
        </ul>
      </div>
      <div className="One_carousel">
        <Carousel autoplay>
          <div>
            <img src={bizi} alt="" />          </div>
          <div>
            <img src={yanjing} alt="" />
          </div>
          <div>
            <img src={lian} alt="" />
          </div>

        </Carousel>
      </div>
      <div className="One_search">
        <Search
          placeholder="在这里搜索"
          enterButton="搜索"
          prefix={<SearchOutlined />}
          onSearch={value => console.log(value)}
        />
        <div className="One_search_right">电话咨询</div>
      </div>


      <div className="One_xiangmu">
        <ul>
          <li>
            <img src={Logo} alt="" />
            <div className="One_xiangmu_right">
              <div className="One_xiangmu_right_title">鼻子</div>
              <div className="One_xiangmu_right_btm">
                <span><Divider type="vertical" />555</span>
                <span><Divider type="vertical" />555</span>
                <span><Divider type="vertical" />555</span>
                <span><Divider type="vertical" />555</span>
                <span><Divider type="vertical" />555</span>
                <span><Divider type="vertical" />555</span>
                <span><Divider type="vertical" />555</span>
                <span><Divider type="vertical" />555</span>
                <span><Divider type="vertical" />555</span>
                <span><Divider type="vertical" />555</span>
                <span><Divider type="vertical" />555</span>
                <span><Divider type="vertical" />555</span>

              </div>
            </div>
          </li>


          <li>
            <img src={Logo} alt="" />
            <div className="One_xiangmu_right">
              <div className="One_xiangmu_right_title">鼻子</div>
              <div className="One_xiangmu_right_btm">
                <span><Divider type="vertical" />555</span>
                <span><Divider type="vertical" />555</span>
                <span><Divider type="vertical" />555</span>
                <span><Divider type="vertical" />555</span>
                <span><Divider type="vertical" />555</span>
                <span><Divider type="vertical" />555</span>
                <span><Divider type="vertical" />555</span>
                <span><Divider type="vertical" />555</span>
                <span><Divider type="vertical" />555</span>
                <span><Divider type="vertical" />555</span>
                <span><Divider type="vertical" />555</span>
                <span><Divider type="vertical" />555</span>

              </div>
            </div>
          </li>
          <img src={yanjing} alt=""></img>
          <li>
            <img src={Logo} alt="" />
            <div className="One_xiangmu_right">
              <div className="One_xiangmu_right_title">鼻子</div>
              <div className="One_xiangmu_right_btm">
                <span><Divider type="vertical" />555</span>
                <span><Divider type="vertical" />555</span>
                <span><Divider type="vertical" />555</span>
                <span><Divider type="vertical" />555</span>
                <span><Divider type="vertical" />555</span>
                <span><Divider type="vertical" />555</span>
                <span><Divider type="vertical" />555</span>
                <span><Divider type="vertical" />555</span>
                <span><Divider type="vertical" />555</span>
                <span><Divider type="vertical" />555</span>
                <span><Divider type="vertical" />555</span>
                <span><Divider type="vertical" />555</span>

              </div>
            </div>
          </li>

          <li>
            <img src={Logo} alt="" />
            <div className="One_xiangmu_right">
              <div className="One_xiangmu_right_title">鼻子</div>
              <div className="One_xiangmu_right_btm">
                <span><Divider type="vertical" />555</span>
                <span><Divider type="vertical" />555</span>
                <span><Divider type="vertical" />555</span>
                <span><Divider type="vertical" />555</span>
                <span><Divider type="vertical" />555</span>
                <span><Divider type="vertical" />555</span>
                <span><Divider type="vertical" />555</span>
                <span><Divider type="vertical" />555</span>
                <span><Divider type="vertical" />555</span>
                <span><Divider type="vertical" />555</span>
                <span><Divider type="vertical" />555</span>
                <span><Divider type="vertical" />555</span>

              </div>
            </div>
          </li>
        </ul>
      </div>


      <div class="Activity">
        <img class="Activity_1" src={Activity_1} width="100%" height="70" alt="" />
        <img class="Activity_2" src={Activity_2} width="100%" height="70" alt="" />
        <img class="Activity_3" src={Activity_3} width="100%" height="80" alt="" />
        <img class="Activity_4" src={Activity_4} width="100%" height="100" alt="" />
        <h4 onclick="window.location.href=''">本月优惠</h4>
        <span class="f1" onclick="window.location.href='http://lut.zoosnet.net/LR/Chatpre.aspx?id=LUT97590366'" target="_blank">   68元<br />轻舒妇科检查套餐</span>
        <span class="f2" onclick="window.location.href='http://lut.zoosnet.net/LR/Chatpre.aspx?id=LUT97590366'" target="_blank">  310元<br />性激素6项检查</span>
        <span class="f3" onclick="window.location.href='http://lut.zoosnet.net/LR/Chatpre.aspx?id=LUT97590366'" target="_blank">  180元<br />产前优生<br />4项检查</span>
        <span class="f4" onclick="window.location.href='http://lut.zoosnet.net/LR/Chatpre.aspx?id=LUT97590366'" target="_blank">  5900元起<br />分娩套餐</span>
        <span class="f5" onclick="window.location.href='http://lut.zoosnet.net/LR/Chatpre.aspx?id=LUT97590366'" target="_blank"> 30元<br />胎心监测/次</span>
        <span class="f6" onclick="window.location.href='http://lut.zoosnet.net/LR/Chatpre.aspx?id=LUT97590366'" target="_blank">180元<br />人流优惠劵</span>
        <span class="f7" onclick="window.location.href='http://lut.zoosnet.net/LR/Chatpre.aspx?id=LUT97590366'" target="_blank"> 178元<br />唐氏筛查</span>
        <span class="f8" onclick="window.location.href='http://lut.zoosnet.net/LR/Chatpre.aspx?id=LUT97590366'" target="_blank">58元<br />早孕检查套餐</span>
        <span class="f9" onclick="window.location.href='http://lut.zoosnet.net/LR/Chatpre.aspx?id=LUT97590366'" target="_blank">四维彩超<br />立减<br />100元</span>

      </div>
    </OneWrapper>
  );
}

export default One;