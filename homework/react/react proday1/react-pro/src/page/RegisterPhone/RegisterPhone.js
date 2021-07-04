import React from 'react'
import {useEffect} from "react"
import {Modal} from "antd-mobile"
import './RegisterPhone.less'

const alert = Modal.alert
export default function RegisterPhone() {
    useEffect(() => {
      
            alert(
              // 标题
              '注册协议及隐私政策',
              // 内容
              <span className="policy-content">
                在您注册成为硅谷用户的过程中，您需要完成我们的注册流程并通过点击同意的形式在线签署以下协议，
                <span className="policy-strong">请您务必仔细阅读、充分理解协议中的条款内容后再点击同意（尤其是以粗体并下划线标识的条款，因为这些条款可能会明确您应履行的义务或对您的权利有所限制）</span>
                <span className="policy-text">《硅谷用户注册协议》</span>
                <span className="policy-text">《硅谷隐私政策》</span>
              </span>,
              // 底部按钮
              [
                { text: '不同意', onPress: () => console.log('cancel') },
                {
                  text: '同意', onPress: () => console.log('ok'), style: {
                    backgroundColor: '#e94f4f',
                    color: '#fff'
                  }
                },
              ]
            )
        
    }, [])
    return (
        <div>
            RegisterPhone...
        </div>
    )
}
