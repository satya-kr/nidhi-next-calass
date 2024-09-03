export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        <ul>
          <li>3</li>
          <li>4</li>  
        </ul>
   
        {children}
      </section>
    )
  }