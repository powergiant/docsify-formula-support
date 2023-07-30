# 1. section 1 title [ref_label = "a section"]
<!-- # section 1 title -->

## section 1.1 title [ref_label = 'another section']

the <a class = 'reference' onclick='jump("something_example", "")'> example </a> 


<p sketch = 'definition of something' class = 'definition' ref_label = 'a definition'> 
A <ins>something</ins> consists of <ins>something</ins> $some\ formula$.
</p>

<p sketch = '' class = 'definition'>definition with no sketch</p>

<p sketch = 'definition of something' class = 'definition'> 
A <ins>something</ins> consists of <ins>something</ins> $some\ formula$.

<ul>
  <li ref_label = 'one item'>
    <i>something.</i> something
    <div class = 'equation' ref_label = 'newton'> 
        $$
        \frac{dx_i}{dt} = v_i,\qquad \frac{dv_i}{dt} = -\sum_{j\ne i}\nabla\Phi(x_i - x_j).  \tag{N}
        $$
    </div>
    <div class = 'equation' ref_label = 'some equation'>
        $$
            f(x) = x^2
        $$
    </div>
  </li>
  <li>
    <i>something.</i> something
  </li>
</ul>
</p>

<p sketch = 'definition of something' class = 'definition'> 
A <ins>something</ins> consists of <ins>something</ins> $some\ formula$.
</p>

<p ref_label = 'something_example' sketch = 'something_example' class = 'example'>
A <ins>something</ins> consists of <ins>something</ins> $some\ formula$.
</p>

<p sketch = 'something' class = 'example'>
A <ins>something</ins> consists of <ins>something</ins> $some\ formula$.
</p>

<p sketch = 'something' class = 'theorem'>
A <ins>something</ins> consists of <ins>something</ins> $some\ formula$.
</p>

<p sketch = 'something' class = 'remark'>
A <ins>something</ins> consists of <ins>something</ins> $some\ formula$.
</p>


<p sketch = 'something' class = 'lemma'>something</p>

<p sketch = 'something' class = 'proposition'>something</p>


## section 1.2 title

### section 1.2.1 title [ref_label = 'one more section']

something Theorem 1.1 is good

<p sketch = 'definition of something' class = 'definition'> 
A <ins>something</ins> consists of <ins>something</ins> $some\ formula$.
</p>


### section 1.2.2 title


something

<p sketch = 'definition of something' class = 'definition'> 
A <ins>something</ins> consists of <ins>something</ins> $some\ formula$.
</p>

## section 1.3 title 

### section 1.3.1 title

something

### section 1.3.2 title

something

**Some tests of jump**

<span onclick="jump('newton')"> (N)</span>   

<span onclick="jump('some equation')"> (N)</span>  

<span onclick="jump('Section 1')"> Section 1</span>  

<span onclick="jump('a definition')"> Definition 1.1</span>  

<span onclick="jump('a section')"> Section 1</span>  

<span onclick="jump('another section')"> Section 1.1</span>  

<span onclick="jump('one more section')"> Section 1.2.1</span>  

<span onclick="jump('one item')"> one item</span> 

<a ref = 'newton' class = 'reference'></a>


