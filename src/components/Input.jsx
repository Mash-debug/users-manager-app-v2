import { Input as BaseInput, ConfigProvider } from "antd"

export default function Input() {

    return <ConfigProvider theme={{
        components: {
            Input: {
                activeBorderColor: "#f857a6",
                hoverBorderColor: "#f857a6",
            }
        }
    }}>
        <BaseInput size="large" style={{fontFamily: "Nunito Sans", minWidth: "300px"}} />
    </ConfigProvider>
}