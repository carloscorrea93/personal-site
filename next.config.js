module.exports = {
  async redirects() {
    return [
      {
        source: '/contest/4349/fb/ads',
        destination: 'https://www.facebook.com/share/p/XTJ4EKcmqozrT2uN/?mibextid=WC7FNe',
        permanent: true,
      },
      {
        source: '/contest/4349/ig/ads',
        destination: 'https://www.instagram.com/p/DBwcLqHvnAP',
        permanent: true,
      },
    ];
  },
};
