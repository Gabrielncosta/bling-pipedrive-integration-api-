import mongoose from 'mongoose';

mongoose.connect(
  'mongodb+srv://linkapi:9CXzufZkb6kGeFua@linkapi.kthb4.mongodb.net/dblinkapi?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true },
);
