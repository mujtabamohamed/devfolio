export function Blog() {
  const posts = [
    { 
      title: "Tips for Creating Beautiful Image Borders", 
      date: "13.09.2025", 
      badge: "New",
      preview: "/blog-preview-1.jpg", // You'll need to add these images
      description: "Learn how to create stunning image borders with CSS and design techniques"
    },
    { 
      title: "Two of My Projects Featured on OrcDev's YouTube Channel", 
      date: "06.09.2025", 
      badge: "New",
      preview: "/blog-preview-2.jpg",
      description: "Exciting news about my projects being showcased on a popular YouTube channel"
    },
    { 
      title: "Manu Arora reviewed My Portfolio Website", 
      date: "02.09.2025", 
      badge: "",
      preview: "/blog-preview-3.jpg",
      description: "Getting feedback from industry experts on portfolio design"
    },
    { 
      title: "React Wheel Picker joins Vercel Open Source Program", 
      date: "24.07.2025", 
      badge: "",
      preview: "/blog-preview-4.jpg",
      description: "My open source component gets recognized by Vercel"
    },
  ];

  return (
    <section className="space-y-0" id="blog">
      <div className="border-y">
        <h2 className="text-3xl font-semibold px-6 py-4">Blog</h2>
        <p className="text-muted-foreground px-6 pb-4">A collection of articles on development, design, and ideas.</p>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2 px-6 py-6 border-b">
        {posts.map((post, index) => (
          <article 
            key={post.title} 
            className={`group rounded-lg border bg-card overflow-hidden hover:bg-accent/50 transition-colors cursor-pointer ${
              index === 0 || index === 1 ? 'md:col-span-1' : 'md:col-span-1'
            }`}
          >
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-purple-400 via-pink-400 to-orange-400 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/80 via-pink-500/80 to-orange-500/80 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="w-12 h-12 bg-white/20 rounded-lg mx-auto mb-2 flex items-center justify-center">
                      📝
                    </div>
                    <p className="text-sm opacity-80">Blog Preview</p>
                  </div>
                </div>
              </div>
              
              {/* Badge */}
              {post.badge && (
                <span className="absolute top-3 right-3 bg-blue-500 text-white text-xs px-2 py-1 rounded-md font-medium">
                  {post.badge}
                </span>
              )}
            </div>
            
            <div className="p-4">
              <h3 className="font-semibold leading-6 mb-2 group-hover:text-blue-600 transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                {post.description}
              </p>
              <div className="text-xs text-muted-foreground">{post.date}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}