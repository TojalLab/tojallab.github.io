---
title: 'Signer'
description: 'Signer is an Open Source library written in R for signature something'
category: 
 - Bioinformatics
 - Signature
bib: "@article{rosales2017signer,  title={signeR: an empirical Bayesian approach to mutational signature discovery},  author={Rosales, Rafael A and Drummond, Rodrigo D and Valieris, Renan and Dias-Neto, Emmanuel and Da Silva, Israel T},  journal={Bioinformatics},  volume={33},  number={1},  pages={8--16},  year={2017},  publisher={Oxford University Press}}"
links:
 - {  title: "Paper", url: "https://academic.oup.com/bioinformatics/article-abstract/33/1/8/2525683" }
 - {  title: "Github repository", url: "https://github.com/TojalLab/signeR" }
---
# Signer

## Motivation
Mutational signatures can be used to understand cancer origins and provide a unique opportunity to group tumor types that share the same origins and result from similar processes. These signatures have been identified from high throughput sequencing data generated from cancer genomes by using non-negative matrix factorisation (NMF) techniques. Current methods based on optimization techniques are strongly sensitive to initial conditions due to high dimensionality and nonconvexity of the NMF paradigm. In this context, an important question consists in the determination of the actual number of signatures that best represent the data. The extraction of mutational signatures from high-throughput data still remains a daunting task.

## Results
Here we present a new method for the statistical estimation of mutational signatures based on an empirical Bayesian treatment of the NMF model. While requiring minimal intervention from the user, our method addresses the determination of the number of signatures directly as a model selection problem. In addition, we introduce two new concepts of significant clinical relevance for evaluating the mutational profile. The advantages brought by our approach are shown by the analysis of real and synthetic data. The later is used to compare our approach against two alternative methods mostly used in the literature and with the same NMF parametrization as the one considered here. Our approach is robust to initial conditions and more accurate than competing alternatives. It also estimates the correct number of signatures even when other methods fail. Results on real data agree well with current knowledge.

## Availability and Implementation
signeR is implemented in R and C++, and is available as a R package at http://bioconductor.org/packages/signeR.
