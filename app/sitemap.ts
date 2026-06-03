import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://tefillin-botchko.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      // אם קראת לעמוד הנגישות בשם אחר (כמו accessibility), שנה פה את המילה nagishut בהתאם לכתובת האמיתית
      url: 'https://tefillin-botchko.com/nagishut',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}