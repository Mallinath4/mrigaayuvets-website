# Doctors display fix

The About page now:
- supports both `image` and legacy `photo` doctor fields;
- falls back to local doctor images when an API image is missing/broken;
- falls back to the three local doctor profiles if `/api/doctors` returns an empty list or fails;
- times out a stalled doctor request after 7 seconds;
- no longer hides doctor cards behind the scroll-reveal observer.
