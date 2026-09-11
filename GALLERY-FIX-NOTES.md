# Gallery + Hero fixes

- Homepage hero images are now four consistent 16:9 local assets under `public/images/hero/`.
- Gallery frontend accepts Cloudinary `url`, `secure_url`, or `imageUrl` records.
- The public gallery upload route now stores the Cloudinary CDN URL instead of an invalid `/static/...` path.
- Gallery grid cards use a consistent 4:3 image frame.
