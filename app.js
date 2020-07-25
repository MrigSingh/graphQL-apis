const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://kittu:pass123@graphqlcluster.ozjsg.mongodb.net/GraphQLCluster?retryWrites=true&w=majority');
mongoose.connection.once('open', () => {
  console.log('Connected to DB');
})

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('Now listening to request at PORT 4000')
})