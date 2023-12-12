import MainLayout from '@/layout/MainLayout'
import { Button, Typography } from 'antd'
import { PageComponent } from 'next'

const HomePage: PageComponent = () => {
  return (
    <Typography.Text type="warning" className="min-h-screen">
      this is body
      <Button type="primary">Primary</Button>
    </Typography.Text>
  )
}

export default HomePage

HomePage.getLayout = function (page) {
  return <MainLayout>{page}</MainLayout>
}
