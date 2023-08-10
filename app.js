const express = require('express'); 
const path = require('path');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const session = require('express-session');
const flash = require('connect-flash');
const ExpressError = require('./utils/ExpressError');
const methodOverride = require('method-override');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/user');
const { isLoggedIn } = require('./middleware');
require('dotenv').config();
// const expressLayouts = require('express-ejs-layouts');

// const onasRoute = require('./routes/onas');
// const uwieRoute = require('./routes/uwie');
const adminRoute = require('./routes/admin');
const Kazanie = require('./models/kazanie');
const Artykul = require('./models/artykul');
const userRoute = require('./routes/users');
const kazRoute = require('./routes/kaz');
const artRoute = require('./routes/art');
const searchRoute = require('./routes/search');
const searchArtRoute = require('./routes/search-art');

const monthNames = ['stycznia', 'lutego', 'marca','kwietnia', 'maja', 'czerwca', 'lipca','sierpnia', 'września', 'października','listopada', 'grudnia']; 


mongoose.connect('mongodb://localhost:27017/gornaizba',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Błąd z połączeniem do bazy danych:"));
db.once("open", () => {
    console.log("Połączono z bazą danych")
});

const app = express();

app.engine('ejs', ejsMate)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')))


// app.use(expressLayouts);


const sessionConfig = {
    secret: process.env.THE_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}

app.use(session(sessionConfig))
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
    //console.log(req.session)
    res.locals.currentUser = req.user;
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
})


// app.use('/o_nas', onasRoute);
// app.use('/uwielbienie', uwieRoute);
app.use('/admin', adminRoute);
app.use('/', userRoute);
app.use('/nauczanie', kazRoute);
app.use('/artykuly', artRoute);
app.use('/nauczanie/wyszukaj', searchRoute);
app.use('/artykuly/wyszukaj', searchArtRoute);


app.get('/home', async (req, res) => {
    const kazanie = await Kazanie.findOne().sort({ data: -1 }).exec();
    const artykul = await Artykul.findOne().sort({ data: -1 }).exec();
    res.render('home', { artykul, kazanie, title: 'Home | Górna Izba'})
});

app.get('/', (req, res) => {
    res.redirect('/home');
});

app.get('/o_nas', (req, res) => {
    res.render('onas', {title: 'O nas | Górna Izba'});
});

app.get('/uwielbienie', (req, res) => {
    res.render('uwie', {title: 'Uwielbienie | Górna Izba'});
});

app.get('/artykuly', async (req, res) => {
    const artykuls = await Artykul.find({});    
    const data = new Date().getFullYear() + '';
    const obecnyRok = data.slice(2, 4);
    //const obecnyRok = 25;
    res.render('../artykuly/artykuly', { artykuls, obecnyRok, monthNames, title: 'Artykuły | Górna Izba'})
});

app.get('/artykuly/new', isLoggedIn, (req, res) => {
    res.render('../artykuly/new', {title: 'Nowy Artykuł | Górna Izba'});
});

app.get('/nowyartykul', (req, res) => {
    res.redirect('/artykuly/new')
});

app.post('/artykuly', isLoggedIn, async (req, res) => {
    const artykul = new Artykul(req.body.artykul);
    await artykul.save();
    res.redirect(`/artykuly/${artykul._id}`)
});

app.get('/artykuly/:id', async (req, res) => {
  try {
    const artykul = await Artykul.findById(req.params.id);
    if (!artykul) {
      // Handle not found error
      return res.status(404).send('Artykułu nie znaleziono');
    }
    // Render the model template with the retrieved data
    res.render('../artykuly/show', { artykul, title: `${artykul.tytul + ' - ' + artykul.autor} | Górna Izba` });
  } catch (err) {
    // Handle other errors
    console.error(err);
    res.status(500).redirect('/home');
  }

});

app.get('/artykuly/:id/edit', isLoggedIn, async (req, res) => {
    const paragraphsCount = 10;
    const artykul = await Artykul.findById(req.params.id)
    res.render('../artykuly/edit', {paragraphsCount, monthNames,  artykul, title: 'Edytuj Artykuł | Górna Izba' });
});

app.put('/artykuly/:id', isLoggedIn, async (req, res) => {
    const { id } = req.params;
    const artykul = await Artykul.findByIdAndUpdate(id, { ...req.body.artykul });
    res.redirect(`/artykuly/${artykul._id}`)
});

app.delete('/artykuly/:id', isLoggedIn, async (req, res) => {
    const { id } = req.params;
    await Artykul.findByIdAndDelete(id);
    res.redirect('/artykuly');
});

app.get('/a', isLoggedIn, (req, res) => {
    res.redirect('/admin')
});

app.get('/admin/archiwum', isLoggedIn, async (req, res) => {
    const posty = await Post.find({});
    res.render('./users/archiwum', {posty, title: 'Archiwum | Górna Izba'});
});

app.get('/kontakt', (req, res) => {
    res.render('kontakt', { title: 'Kontakt | Górna Izba'})
});

app.get('/uwielbienie', (req, res) => {
    res.render('uwielbienie', { title: 'Uwielbienie | Górna Izba'})
});

app.get('/wiecej', (req, res) => {
    res.render('wiecej', { title: 'Więcej | Górna Izba'})
});

app.get('/spotkania', (req, res) => {
    res.render('spotkania', { title: 'Spotkania | Górna Izba'})
});

app.get('/nabozenstwa', (req, res) => {
    res.redirect('/#nabozenstwa');
});

app.get('/nowekazanie', isLoggedIn, (req, res) => {
    res.redirect('/admin/kazania/new')
})

app.get('/kaloryfer', (req, res) => {
    res.render('../wiecej/kalo', { title: 'Kaloryfer | Górna Izba'})
});

app.get('/coffeehousegorzow', (req, res) => {
    res.render('../wiecej/kawa', { title: 'Coffee House (Gorzów Wlkp.) | Górna Izba'})
});
app.get('/votd', (req, res) => {
    res.render('../wiecej/votd', { title: 'Werset Dnia | Górna Izba'})
});

app.get('/nasiprzyjaciele', (req, res) => {
    res.render('../wiecej/przyjaciele', { title: 'Nasi Przyjaciele | Górna Izba'})
});
app.get('/o_nas/historia', (req, res) => {
    res.render('./partials/o_nas/historia', { title: 'Nasza historia | Górna Izba'})
});

app.get('/pomoc', isLoggedIn, (req, res) => {
    res.render('pomoc', { title: 'Pomoc | Górna Izba'})
});

app.get('/admin/kazania/:id', isLoggedIn, async (req, res,) => {
    const kazanie = await Kazanie.findById(req.params.id)
    res.render('./users/show', { kazanie, title: 'Nauczanie (admin) | Górna Izba' });
});

app.get('/admin/kazania/:id/edit', isLoggedIn, async (req, res) => {
    const kazanie = await Kazanie.findById(req.params.id)
    res.render('./users/edytujkazanie', { kazanie, title: 'Edytuj Kazanie | Górna Izba' });
});

app.put('/admin/kazania/:id', isLoggedIn, async (req, res) => {
    const { id } = req.params;
    const kazanie = await Kazanie.findByIdAndUpdate(id, { ...req.body.kazanie });
    res.redirect(`/nauczanie/wyszukaj/${kazanie._id}`)
});

app.delete('/admin/kazania/:id', isLoggedIn, async (req, res) => {
    const { id } = req.params;
    await Kazanie.findByIdAndDelete(id);
    res.redirect('/nauczanie');
});

app.all('*', (req, res, next) => {
    next(new ExpressError('Nie możemy znaleźć takiej strony!', 404))
});

app.use((err, req, res, next) => {
    const { statusCode = 500 } = err;
    if (!err.message) err.message = 'Ojej! Coś poszło nie tak!'
    res.status(statusCode).render('error', { err, title: 'Error | Górna Izba'})
});

app.listen(3000, () => {
    console.log('Na porcie 3000 tworzysz stronę dla Górnej Izby')
});



// komentarze w artykulach?? https://developers.facebook.com/docs/plugins/comments/

// wrzucić stare kazania i dodać artykuł z treściami ze starej strony
// o uwielbieniu od nowa i uzupelnic reszte
// dodac piesni i tlumaczenia


// Priorytety:
// uwielbienie (jako subsekcja) od nowa
// kazania uzupelnic:
    // dodać kazania na bazę danych:
        // Bogdan
        // Łukasz
        // Ernest
        // Ania
        // Radek
        // Konferencje
// artykuły:
    // artykuly show?
    // Przenieść świadectwa i inne pisemne rzeczy 
// Potem:


// kolory, paleta barw, nazwa, logo
// Zdjecia na glowna - 4-7 na baner, nabo, kalo, nauczania, uwielbienie...
// ...aktualnosci*, o nas, więcej, CH*, kontakt*
// Uwielbienie - plyty, zespoly, o uwielbieniu
// O nas - sluzby, liderzy, historia (kontynuuacja)
// Zdjecia - zespoly, sluzby, liderzy
// Nasi przyjaciele - jacy?

