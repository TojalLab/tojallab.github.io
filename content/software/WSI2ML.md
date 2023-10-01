---
title: 'WSI2ML - Digital Pathology Image annotator tool' 
description: 'The WSI2ML is Whole Slide Image annotation
software focusing on generating high quality image datasets for Machine Learning.'
image: '/img/wsi2ml.jpg'
authors:
- Luan V. C. Martins
- Israel Tojal da Silva 
category:
- Imaging
- Annotations
- Dataset
- Machine learning
links:
- {title: "Software documentation", url: "https://luanvcmartins.github.io/WSI2ML/"}
- {title: "Github repository", url: "https://github.com/luanvcmartins/WSI2ML"}
---

# WSI2ML

WSI2ML is a straightforward tool for annotating Whole Slide Images (WSIs) for machine learning applications. WSIs are
high-resolution digital images of entire tissue sections, often used in medical research and diagnosis. Annotating these
images can be a time-consuming and challenging task, but it is critical for training accurate machine learning models.

The goal of WSI2ML is to streamline the annotation process, making it easy researchers and clinicians to label WSIs, and
for machine learning specialists to export and use the data for training new machine learning applications. The software
introduces a task-based approach to annotating data, which simplifies the process of training new annotators, tracking
their progress and delegating new tasks. These annotations can then be used to train machine learning models to
accurately diagnose diseases or predict patient outcomes.

Developed as web-application, the software can be installed on a server and made accessible to users in your
organization.

## ML-based WSI workflow

![img](/img/wsi2ml.jpg)

Our goal with the software was to streamline the annotation, revision and ML-model interpretability when dealing with
multi-giga images. In particular, we need to fill the two following gaps we found lacking in currently available
annotation software:

- **Simplified annotation process**: the first step in generating a new image dataset is to have domain specialists
  annotate the image regions, this is often a daunting task if the software is too complicated use. To efficiently get
  new domain-specialists on board, the tool must be as simple as possible to use to make the experience of training and
  adapting willing domain specialists easier.
- **Interpreting the model**: the multigiga nature of those images makes it hard to get human feedback and understand
  how the model behaves. In fact, domain specialists who are key in this aspect of research will often require full 
  access to the images in order to properly provide feedback on how the models work.


### Annotate image

The figure of the domain specialist is key in this research field, as they are needed in order to provide a wide range
of input samples to train our deep learning models. The challenge is to recruit and train the specialist to be able to
provide the required domain-knowledge to train our models. It's of the upmost importance to make their experience of
using the software as smooth as possible, so they can focus on their task: provide carefully made annotations.

The domain specialist experience using the software is simple: upon login, they can see their status page, which 
shows their progress and what images are remaining to be annotated. To start annotating, the user can simply press the 
_continue button_ or choose a specific image that was delegated to them in the list.

In particular, our task-based approach allows not only this simplified experience, but also allow more granular 
control over who is expected to annotate what images.  Moreover, by using tasks, we add accountability into the mix: users 
can track and quantify their progress, taking ownership of their work and participation on the success of the research 
endeavour.

### Revising annotations

Once a task is completed, revision tasks can be made in the system so other pathologists can provide feedback on the 
annotations provided. This feedback is taken into account when exporting annotations, where the machine learning 
specialist can choose to ignore annotations with low agree-ability.

### Exporting annotations

Annotations made through the software can be exported in any stage of the process as long as there are tasks 
marked as completed. The annotations are exported in the `geojson` format, which provides the geometry and metadata 
information of the annotation for each annotated slide. 

ML specialists can customize the annotations exported, download the dynamically generated `zip` file, and use its 
data to train their model as needed. This approach was chosen to allow any type of machine learning algorithm to be 
used. However, we also have provided a public python package to work with `image tiles`.

### Visualizing and interpreting ML-model

The publicly available annotation handling library also has utility functions to generate ``geojson`` files that can 
be uploaded into back the software to visualize the model as annotations. This is particularly useful when 
attempting to understand the model's inner workings and shortcomings. 

### Improving annotations

Lastly, once the ML model's results are available, domain specialists can continue to work on their annotations in 
order to improve model performance. This step was crucial in our image-related research, as it allowed us to 
dynamically understand the challenges, propose changes and guide our research process.

## Install

Follow the instructions available at the official documentation website:
- [Official documentation](https://luanvcmartins.github.io/WSI2ML/).

