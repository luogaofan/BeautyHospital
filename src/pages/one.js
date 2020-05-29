import React, { useState } from 'react';
import styled from 'styled-components'
import { Carousel, Input, Divider } from 'antd';
import 'antd/dist/antd.css'
import Logo from '../images/logo.png'
import bizi from '../images/bizi.jpg'
import lian from '../images/lian.jpg'
import yanjing from '../images/yanjing.jpg'
import huanjing1 from '../images/huanjing1.png'
import huanjing2 from '../images/huanjing2.png'
import huanjing3 from '../images/huanjing3.png'



import { SearchOutlined, FormOutlined, UserOutlined, PhoneOutlined } from '@ant-design/icons';

const { Search } = Input;

const OneWrapper = styled.div`
@import './font/iconfont.css';

background:#d9d9d9;
width:100vw;
box-sizing:border-box;
.One_title{
  background:#ffffff;
  color:#CBA794;
  display:flex;
  align-items:center;
  padding: 10px 0;
  box-sizing:border-box;
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
  background:#ffffff;
  padding: 10px 0;
    box-sizing:border-box;
  display:flex;
  align-items:center;
  width:100vw;
  padding:10px;
  box-sizing:border-box;
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
  background:#ffffff;
  padding: 10px 0;
    box-sizing:border-box;
  img{
    width:100vw;
    background:no-repeat;
  }
  .ant-carousel .slick-slide {
  text-align: center;
  overflow: hidden;
}
.ant-carousel .slick-dots-bottom {
    bottom: 1px;
}
}
.One_search{
  background:#ffffff;
  padding: 10px 0;
    box-sizing:border-box;
  display:flex;
  padding:10px;
  box-sizing:border-box;
  .ant-btn-primary{
    background:#CBA794;
    border:none;
  }
  .One_search_right{
    background:#CBA794;
    text-align:center;
    width:80px;
    height:32px;
    color:#ffffff;
    border-radius:0 4px 4px 0;
    line-height:34px;
  }
}

.One_xiangmu{
  background:#ffffff;
  padding: 10px 0;
    box-sizing:border-box;
  ul,li{ padding:0;margin:0;list-style:none}
  ul{
    img{
    width:100vw;
    height:80px;
  }
    li{
      display:flex;
      flex-direction:row-gap;
      padding: 10px;
      box-sizing:border-box;
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
  .One_xiangmu_btm{
display:flex;
justify-content:center;
color:#CBA794;
  }
}
.Activity {
  margin-top:3px;
  background:#ffffff;
  padding: 10px 0;
    box-sizing:border-box;
.Activity_title{
  display:flex;
  flex-direction:row;
  img{
        width:24px;
        height:24px;
        margin:10px;
      }
      span{
        font-size:16px;
        line-height:44px;
      }
}

.Activity_conent{
  display:flex;
  flex-direction:column;
  .Activity_conent_top{
    display:flex;
    flex-direction:row;
    width:100vw;
    .item{
      display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    height:50px;
    font-size:12px;
    color:#ffffff;
    margin:2px;

    span{
     text-align:center;
   }
    }
    .Activity_conent_top_1{
      width:40vw;
      background:#ff4000;
      height:50px;
    }
    .Activity_conent_top_2{
      width:30vw;
      background:#ec4a13;
      height:50px;
    }
    .Activity_conent_top_3{
      width:30vw;
      background:#d95326;
      height:50px;
    }
  }
  .Activity_conent_bottom{
    display:flex;
    flex-direction:row;
    width:100vw;
    .item{
      display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    height:50px;
    font-size:12px;
    color:#ffffff;
    margin:2px;
   span{
     text-align:center;
   }

    }
    .Activity_conent_bottom_1{
      width:20vw;
      background:#c65d39;
    
    }
    .Activity_conent_bottom_2{
      width:20vw;
      background:#b3664d;
      height:50px;
    }
    .Activity_conent_bottom_3{
      width:30vw;
      background:#9f7060;
      height:50px;
    }
    .Activity_conent_bottom_4{
      width:30vw;
      background:#8c7973;
      height:50px;
    }
  }

}

}
.Environmental{
  margin-top:3px;
  background:#ffffff;
  padding: 10px 0;
    box-sizing:border-box;
  .Environmental_title{
  display:flex;
  flex-direction:row;
  img{
        width:24px;
        height:24px;
        margin:10px;
      }
      span{
        font-size:16px;
        line-height:44px;
      }
}
.Environmental_img{
display:flex;
flex-direction:row;
.Environmental_img_left{
  display:flex;
flex-direction:column;
}
}
}

.characteristic{
  margin-top:3px;
  background:#ffffff;
  padding: 10px 0;
    box-sizing:border-box;
  .characteristic_title{
  display:flex;
  flex-direction:row;
  img{
        width:24px;
        height:24px;
        margin:10px;
      }
      span{
        font-size:16px;
        line-height:44px;
      }
}
.characteristic_img{
  display:flex;
  flex-direction:row;
  .characteristic_img_item{
    display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  }
}

}

.Registered{
  margin-top:3px;
  background:#ffffff;
  padding: 10px 0;
    box-sizing:border-box;
  .Registered_title{
  display:flex;
  flex-direction:row;
  img{
        width:24px;
        height:24px;
        margin:10px;
      }
      span{
        font-size:16px;
        line-height:44px;
      }
}
.Registered_conent{
  .Registered_input{
    width:100vw;
    display:flex;
    flex-direction:row;
    justify-content:flex-end;
    align-items:center;
    margin:10px 0;
    padding-right:10px;
    box-sizing:border-box;
    Input{
      width:calc(100vw - 20%);
    }
  }
  .Registered_button{
    width: 33%;
height: 12%;
margin-left: 43%;
border-radius: 10px;
border: none;
background: #CBA794;
color:#ffffff;
cursor: pointer;
text-align:center;
  }
}
}

.process{
    margin-top:3px;
    padding: 10px 0;
    box-sizing:border-box;

    background:#ffffff;
  display:flex;
  flex-direction:row;
  justify-content: space-around;
 img{
   width:24%;
 }
 .process_item{
   display:flex;
   width:24%;
   flex-direction:column;
   align-items:center;
   justify-content:center;
   background:#d9d9d9;
   color:#ffffff;
   font-size:12px;
   height:50px;
 }
 .one{
  border-radius: 3px 0 0 3px;

 }
 .four{
  background:#CBA794;
  border-radius:0 3px 3px 0;

    }

}

.footer{
    padding: 10px 0;
  display:flex;
  justify-content:center;
  align-items:center;
  font-size:12px;
  box-sizing:border-box;
}

.bottom{
  float: left;
  position:sticky;
  bottom:0;
  display:flex;
  flex-direction:row;
  height:50px;
  .bottom_item{
    display:flex;
    background:#CBA794;
    align-items:center;
    justify-content:center;
    padding:10px;
    box-sizing:border-box;
    img{
      width:33.33%;
    }

  }
  .one{
    border-radius:2px 0 0 0;
    background:#cc977d;
    margin-right:2px;
  }
  .three{
    border-radius:0 2px 0 0;
    background:#dcb9a6;
    margin-left:2px;

  }
  }
`

function One () {
  const [bool, setBool] = useState(true);
  const list = [
    {
      title: '眼部整形',
      data: ['切开双眼皮', '开眼角', '祛眼袋', '双眼皮修复']
    },
    {
      title: '鼻部整形',
      data: ['假体隆鼻', '玻尿酸隆鼻', '综合隆鼻', '鼻修复']
    },
    {
      title: '胸部整形',
      data: ['隆胸失败修复', '自体脂肪隆胸', '假体隆胸', '乳房下垂']
    },
    {
      title: '瘦身塑形',
      data: ['水动力吸脂', '腰腹吸脂', '腿部吸脂', '面部吸脂']
    },
    {
      title: '美白嫩肤',
      data: ['补水美白', '激光美白', '果酸焕肤', '光子嫩肤']
    },
    {
      title: '祛痘',
      data: ['综合祛痘', '果酸祛痘', '粉刺黑头', '祛痘印抗痘']
    },
    {
      title: '抗衰老',
      data: ['射频紧致', '蛋白线提升', '光电抗衰']
    },
    {
      title: '面部除皱',
      data: ['祛抬头纹', '祛川字纹', '祛鱼尾纹', '祛法令纹']
    },
  ]
  const xiangmu = bool ? list.slice(0, 4) : list
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
          <li>
            <i className="iconfont icon-info"></i>
            我要挂号</li>
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
          {xiangmu.map(item => {
            return <li>
              <img src={Logo} alt="" />
              <div className="One_xiangmu_right">
                <div className="One_xiangmu_right_title">{item.title}</div>
                <div className="One_xiangmu_right_btm">
                  {item.data.map(i => {
                    return <span><Divider type="vertical" />{i}</span>
                  })}
                  <span style={{ color: '#cba794' }}><Divider type="vertical" />更多+</span>
                </div>
              </div>
            </li>
          })}
          {/* <img src={yanjing} alt=""></img> */}
        </ul>
        <div className="One_xiangmu_btm" onClick={() => { setBool(!bool) }}>{bool ? "查看更多" : '收起'}</div>
      </div>


      <div className="Activity">
        <div className="Activity_title">
          <img src={Logo} alt="" /><span>本月优惠</span>
        </div>
        <div className="Activity_conent">
          <div className="Activity_conent_top">
            <div className="Activity_conent_top_1 item"> <span  >  88元<br />面部检测</span></div>
            <div className="Activity_conent_top_2 item"><span  >1680元起<br />玻尿酸填充</span></div>
            <div className="Activity_conent_top_3 item"><span  >3800元起<br />基础双眼皮</span> </div>

          </div>
          <div className="Activity_conent_bottom">
            <div className="Activity_conent_bottom_1 item"> <span  > 3580元起<br />祛眼袋</span></div>
            <div className="Activity_conent_bottom_2 item"> <span  > 168元<br />面部护理</span></div>
            <div className="Activity_conent_bottom_3 item"><span  >68元<br />冰点脱毛</span></div>
            <div className="Activity_conent_bottom_4 item"> <span  >4800元起<br />假体隆鼻</span></div>

          </div>
        </div>


      </div>

      <div className="Environmental ">
        <div className="Environmental_title">
          <img src={Logo} alt="" /><span>本月优惠</span>
        </div>
        <div className="Environmental_img">
          <div className="Environmental_img_left">
            <img class="huanjing1" src={huanjing1} width="100%" alt="" />
            <img class="huanjing2" src={huanjing2} width="100%" alt="" />
          </div>
          <img class="huanjing3" src={huanjing3} width="50%" alt="" />
        </div>
      </div>


      <div className="characteristic ">
        <div className="characteristic_title">
          <img src={Logo} alt="" /><span>本月优惠</span>
        </div>
        <div className="characteristic_img">
          <div className="characteristic_img_item">
            <img class="huanjing1" src={huanjing1} width="90%" alt="" />
            <span>国际认证</span>
          </div>
          <div className="characteristic_img_item">
            <img class="huanjing2" src={huanjing2} width="90%" alt="" />
            <span>国际认证</span>
          </div>
          <div className="characteristic_img_item">
            <img class="huanjing2" src={huanjing2} width="90%" alt="" />
            <span>国际认证</span>
          </div>
        </div>
      </div>


      <div class="Registered">
        <div className="Registered_title">
          <img src={Logo} alt="" /><span>本月优惠</span>
        </div>
        <div className="Registered_conent">
          <div className="Registered_input"><span>姓名：</span>
            <Input placeholder="请填写你的姓名" style={{ width: "70%" }} prefix={<UserOutlined />} />
          </div>
          <div className="Registered_input"><span>电话：</span>
            <Input placeholder="请填写你的电话" style={{ width: "70%" }} prefix={<PhoneOutlined />} />
          </div>
          <div className="Registered_input"><span>描述病情：</span>
            <Input placeholder="请描述你的病情" style={{ width: "70%" }} prefix={<FormOutlined />} />
          </div>
          <div className="Registered_button">提交预约挂号 </div>

        </div>
      </div>


      <div className="process">
        <div className="process_item one">
          <img src={Logo} alt="" />
          <span>在线预约</span>
        </div>
        <div className="process_item">
          <img src={Logo} alt="" />
          <span>在线预约</span>
        </div>
        <div className="process_item">
          <img src={Logo} alt="" />
          <span>在线预约</span>
        </div>

        {/* <img src={Registered_24} alt="" /> */}
        <div className="process_item four">
          <img src={Logo} alt="" />
          <span>在线预约</span>
        </div>
      </div>

      <div className="footer">
        <p>
          到院咨询，更多优惠
        <br />
       在线预约：19970052769
       <br />
       地址：南昌市湖滨南路36号
       <br />
        门诊时间：9:30-17:30（节假日不休）
        </p>
      </div>

      <div className="bottom">
        <div className="bottom_item one">
          <img src={Logo} alt="" />

          拨打电话
        </div>
        <div className="bottom_item">
          <img src={Logo} alt="" />

          我要提问
        </div>
        <div className="bottom_item three">
          <img src={Logo} alt="" />
          首页
        </div>
      </div>
    </OneWrapper>
  );
}

export default One;