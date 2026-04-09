import tiquiImg   from '../../assets/Prato-Lippia-nodiflora-dettaglio-fiori-KnAkuChF.webp'
import rayitosImg from '../../assets/rayitos.webp'
import cotulaImg  from '../../assets/cotula-BKO0TsRY.webp'
// Note: filename has a space — Vite handles it correctly
import falkiaImg  from '../../assets/falkia repens-ByP6ONzR.webp'
import dymondiaImg from '../../assets/dymondia-BqI_t1LD.webp'
import doquillaImg from '../../assets/doquilla-D4ESuPL5.webp'
import hiedraImg  from '../../assets/hiedra-BJ9mUg0-.webp'
import festucaImg from '../../assets/festuca-C3ZmUChx.webp'
import myoporumImg from '../../assets/myoporum-parvifolium-creeping-boobialla-1-1-DKOV_ZUP.webp'
import vitadiniaImg from '../../assets/Vitadinia-DcOQXwZW.webp'
import verbenaImg from '../../assets/Verbena_bonariensis-C14ktlZ-.webp'
import docaImg    from '../../assets/doca-chilena-c-kerstin-firmin-inaturalist-BBQgvQy2.webp'

export const plants = [
  {
    id: 'tiqui-tiqui',
    name: 'Tiqui Tiqui',
    scientific: 'Lippia nodiflora',
    image: tiquiImg,
    description: 'La favorita de los jardines chilenos. Cobertura densa, flores pequeñas y excepcional resistencia al pisoteo. La mejor alternativa al césped tradicional.',
    tags: ['Sol', 'Bajo riego', 'Pisoteo fuerte'],
    featured: true,
  },
  {
    id: 'cotula',
    name: 'Cótula',
    scientific: 'Cotula coronopifolia',
    image: cotulaImg,
    description: 'Tapizante de follaje fino con pequeñas flores amarillas. Resiste el pisoteo y se adapta muy bien a suelos húmedos y zonas costeras.',
    tags: ['Sol / Semisombra', 'Riego moderado', 'Pisoteo'],
  },
  {
    id: 'falkia-repens',
    name: 'Falkia Repens',
    scientific: 'Falkia repens',
    image: falkiaImg,
    description: 'Tapizante aromática de textura fina y crecimiento horizontal. Perfecta para jardines de bajo consumo de agua y zonas de tránsito moderado.',
    tags: ['Sol / Semisombra', 'Bajo riego'],
  },
  {
    id: 'dymondia',
    name: 'Dymondia',
    scientific: 'Dymondia margaretae',
    image: dymondiaImg,
    description: 'Hoja plateada muy resistente a la sequía y al calor. Una de las mejores opciones para zonas áridas y costeras sin necesidad de riego frecuente.',
    tags: ['Sol pleno', 'Muy bajo riego', 'Sequía'],
  },
  {
    id: 'doquilla',
    name: 'Doquilla',
    scientific: 'Dichondra micrantha',
    image: doquillaImg,
    description: 'Tapiz de hojas redondas verdes, ideal para zonas de sombra y semisombra. Crea un efecto de alfombra natural muy elegante y suave.',
    tags: ['Semisombra', 'Riego moderado', 'Sombra'],
  },
  {
    id: 'hiedra',
    name: 'Hiedra',
    scientific: 'Hedera helix',
    image: hiedraImg,
    description: 'Clásica y versátil. Ideal para cubrir taludes, muros y grandes superficies. Follaje perenne y verde todo el año con mínimo cuidado.',
    tags: ['Sombra / Semisombra', 'Bajo riego', 'Taludes'],
  },
  {
    id: 'festuca',
    name: 'Festuca',
    scientific: 'Festuca glauca',
    image: festucaImg,
    description: 'Gramínea ornamental de tonalidad azul-plateada. Aporta textura y contraste único. Extremadamente resistente y de muy bajo mantenimiento.',
    tags: ['Sol pleno', 'Muy bajo riego', 'Ornamental'],
  },
  {
    id: 'myoporum',
    name: 'Myoporum',
    scientific: 'Myoporum parvifolium',
    image: myoporumImg,
    description: 'Tapizante de rápido crecimiento con pequeñas flores blancas. Cubre grandes extensiones con mínimo riego. Ideal para zonas costeras.',
    tags: ['Sol pleno', 'Bajo riego', 'Rápido crecimiento'],
  },
  {
    id: 'vitadinia',
    name: 'Vitadinia',
    scientific: 'Vittadinia triloba',
    image: vitadiniaImg,
    description: 'Nativa chilena con flores blancas delicadas. Perfecta para jardines sustentables que buscan integrar flora local y atraer polinizadores.',
    tags: ['Sol', 'Bajo riego', 'Nativa', 'Sustentable'],
  },
  {
    id: 'verbena',
    name: 'Verbena',
    scientific: 'Verbena bonariensis',
    image: verbenaImg,
    description: 'Flores violeta que atraen mariposas y abejas. Aporta color y movimiento al jardín. Ideal para diseños naturales y jardines polinizadores.',
    tags: ['Sol pleno', 'Bajo riego', 'Polinizadores'],
  },
  {
    id: 'doca-chilena',
    name: 'Doca Chilena',
    scientific: 'Carpobrotus chilensis',
    image: docaImg,
    description: 'Suculenta nativa de rápido crecimiento con flores rosadas. Excelente para taludes costeros y suelos erosionados. Sin riego una vez establecida.',
    tags: ['Sol pleno', 'Sin riego', 'Nativa', 'Taludes'],
  },
  {
    id: 'rayitos',
    name: 'Rayitos',
    scientific: 'Gazania rigens',
    image: rayitosImg,
    description: 'Flores amarillas y naranjas que iluminan cualquier jardín. Muy resistente a la sequía y al calor. Ideal para bordes, rocallas y zonas de bajo mantenimiento.',
    tags: ['Sol pleno', 'Muy bajo riego', 'Floración'],
  },
]
