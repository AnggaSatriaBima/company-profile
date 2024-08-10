import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '@/section/Section';

const VerticalFeatures = () => (
    <Section
      title="5 Classic BMW Cars Already in Showroom"
      description="BMW is known to be one of the manufacturers that has cars with good designs. So it's not surprising that many people collect classic BMW cars. In Indonesia itself, there are several BMW models that are often targeted. Even in 2019 the price is increasing because many people are looking for it and want to keep it again. Anything?"
    >
      <VerticalFeatureRow
        title="1. BMW E30 Coupe"
        description="One of the classic BMW cars that is increasingly sought after is the BMW E30 coupe. This two-door car has become one of the most sought after cars in recent years. The small number of doors is considered an advantage for BMW fans. Apart from that, the population in Indonesia is also not large."
        image="https://carmudi-journal.icarcdn.com/carmudi-id/wp-content/uploads/2019/04/01143602/maxresdefault.jpg"
        imageAlt="First feature alt text"
      />
      <VerticalFeatureRow
        title="2. BMW E30 Touring"
        description="Cars with a station wagon or touring design are one of the targets for automotive lovers in Indonesia. The wagon version of the BMW E30 is also a model that is quite sought after. Apart from having a quite strange design, this touring version of the BMW E30 also has a quite expensive price tag. In the eyes of collectors, this wagon version of the BMW E30 is an advantage in itself."
        image="https://carmudi-journal.icarcdn.com/carmudi-id/wp-content/uploads/2019/04/01143651/1478183613-e30-two-door-wagon.jpg"
        imageAlt="First feature alt text"
        reverse
      />
      <VerticalFeatureRow
        title="3. BMW E36 coupe"
        description="One model that is quite tempting to collect is the coupe version of the BMW E36. In recent years, the BMW E36 has gained popularity again after many people built this car. The price of the BMW E36 is also increasing drastically. The same as the 4-door version, the two-door version of the BMW E36 is also a rare car that is quite sought after."
        image="https://carmudi-journal.icarcdn.com/carmudi-id/wp-content/uploads/2019/04/01143730/BMW-M3-GT-E36-17.jpg"
        imageAlt="First feature alt text"
      />
      <VerticalFeatureRow
        title="4. BMW 2002"
        description="This two-door sedan was first introduced in 1969. There were three versions offered, namely the BMW 2002 ti, 2002 tii and 2002 turbo. The BMW 2002 was also the first sedan to officially use a turbo by BMW. The BMW 2002 is the successor sedan to the BMW 1600 which is no less legendary in the eyes of classic BMW fans."
        image="https://carmudi-journal.icarcdn.com/carmudi-id/wp-content/uploads/2019/04/01143823/BMW-2002-Car-Full-Size-PNG-1600x1067.png"
        imageAlt="First feature alt text"
        reverse
      />
      <VerticalFeatureRow
        title="5. BMW E28"
        description="Have you watched the latest Mission Impossible film? This car is one of the cars used by Ethan Hunt in the film. The BMW E28 or BMW 5 series is a car produced in 1981-1988. During its lifetime, this sedan was produced 722,328 thousand units worldwide. In Indonesia, the BMW E28 is now starting to be sought after by many fans."
        image="https://carmudi-journal.icarcdn.com/carmudi-id/wp-content/uploads/2019/04/01143903/maxresdefault-1.jpg"
        imageAlt="First feature alt text"
      />
    </Section>
);

export { VerticalFeatures };
