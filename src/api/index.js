// 导出axios给main挂载
import axios from 'axios'

// 对axios进行配置
// baseURL:设置基准地址(以后不用写前面相同的地址，只要写后面的就可以)
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0/'

// 其它配置(暂时没有)

export default axios
