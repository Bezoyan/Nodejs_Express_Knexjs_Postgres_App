process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const server = require('../app');



chai.use(chaiHttp);

describe('API Routes', function() {
    describe('GET /articles', function() {
        it('should return all articles', function(done) {
              chai.request(server)
                  .get('/articles')
                  .end(function(err, res) {
                      res.should.have.status(200);
                      res.should.be.json; // jshint ignore:line
                      res.body.should.be.a('array');
                      res.body[0].should.have.property('heading');
                      res.body[0].heading.should.equal('rowValue1');
                      res.body[0].should.have.property('content');
                      res.body[0].content.should.equal('Hello I am content');
                      res.body[0].should.have.property('created_at');
                      res.body[0].created_at.should.equal('2022-02-16T20:27:39.889Z');
                      res.body[0].should.have.property('updated_at');
                      res.body[0].updated_at.should.equal('2022-02-16T20:27:39.889Z');
                      done();
                  });
        });
    });
    
    describe('GET /article/:id', function() {
        it('should return a single article with id', function(done) {
            chai.request(server)
                .get('/article/1')
                .end(function(err, res) {
                    res.should.have.status(200);
                    res.should.be.json; // jshint ignore:line
                    res.body.should.be.a('object');
                    res.body.should.have.property('heading');
                    res.body.heading.should.equal('rowValue1');
                    res.body.should.have.property('content');
                    res.body.content.should.equal('Hello I am content');
                    res.body.should.have.property('created_at');
                    res.body.created_at.should.equal('2022-02-16T20:27:39.889Z');
                    res.body.should.have.property('updated_at');
                    res.body.updated_at.should.equal('2022-02-16T20:27:39.889Z');
                    done();
                });
        });
    });

    describe('PUT /article/:id', function() {
        it('should update an article', function(done) {
            chai.request(server)
                .put('/article/31')
                .send({
                  heading: 'updated value2',
                  content: 'updated content2'
                })
                .end(function(err, res) {
                    res.should.have.status(200);
                    res.should.be.json; // jshint ignore:line
                    res.body.should.be.a('object');
                    res.body.should.have.property('heading');
                    res.body.heading.should.equal('updated value');
                    res.body.should.have.property('content');
                    res.body.content.should.equal('updated content');
                    res.body.should.have.property('created_at');
                    res.body.created_at.should.equal('2022-02-16T20:27:39.889Z');
                    res.body.should.have.property('updated_at');
                    res.body.updated_at.should.equal('2022-02-16T20:27:39.889Z');
                    done();
                });
        });
    });

    describe('DELETE /article/:id', function() {
        it('should delete an article', function(done) {
            chai.request(server)
                .delete('/article/32')
                .end(function(err, res) {
                    res.should.have.status(200);
                    res.should.be.json; // jshint ignore:line
                    res.body.should.be.a('object');
                    res.body.should.have.property('heading');
                    res.body.heading.should.equal('rowValue3');
                    res.body.should.have.property('content');
                    res.body.content.should.equal('rHello I am content3');
                    res.body.should.have.property('created_at');
                    res.body.created_at.should.equal('2022-02-16T20:27:39.889Z');
                    res.body.should.have.property('updated_at');
                    res.body.updated_at.should.equal('2022-02-16T20:27:39.889Z');
                });
                    chai.request(server)
                    .get('/articles')
                    .end(function(err, response) {
                        response.should.have.status(200);
                        response.should.be.json; // jshint ignore:line
                        response.body.should.be.a('array');
                        response.body[0].should.have.property('heading');
                        response.body[0].heading.should.equal('rowValue1');
                        response.body[0].should.have.property('content');
                        response.body[0].content.should.equal('Hello I am content');
                        response.body[0].should.have.property('created_at');
                        response.body[0].created_at.should.equal('2022-02-16T20:27:39.889Z');
                        response.body[0].should.have.property('updated_at');
                        response.body[0].updated_at.should.equal('2022-02-16T20:27:39.889Z');
                        done();
                    });

        });
    });

    describe('POST /article', function() {
      it('should create an article', function(done) {
          chai.request(server)
              .post('/article')
              .send({
                heading: 'new value',
                content: 'new content'
              })
              .end(function(err, res) {
                  res.should.have.status(201);
                  res.should.be.json; // jshint ignore:line
                  res.body.should.be.a('object');
                  res.body.should.have.property('heading');
                  res.body.heading.should.equal('new value');
                  res.body.should.have.property('content');
                  res.body.content.should.equal('new content');
                  done();
              });
      });
  });
});