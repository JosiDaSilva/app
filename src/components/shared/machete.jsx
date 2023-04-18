
 <div className="grid justify-center gap-2">
 <p className="text-white p-.2">{product.stock_corrientes} en Stock en Corrientes</p><label for="stock_corr">Elegir Cantidad (10-{product.stock_corrientes}):</label>
 <input required type="number" Corr="product.stock_corr" name="stock_corr"
step="10"min="10" max={product.stock_corrientes} className=" p-.3 items-center rounded-xl text-black"/><button className="bg-[#f07c04] p-1 flex 
rounded-xl text-white text-center justify-center" onClick={()=>onAddProduct(product.stock_corrientes)}>Agregar</button>

   </div>


<p className="text-white p-.2">{product.stock_misiones} en Stock en Misiones</p><label for="stock_misio">Elegir Cantidad (10-{product.stock_misiones}):</label>
<input required type="number" Mis="product.misio" name="stock_misio"
step="10" min="10" max={product.stock_misiones} className=" p-.3 items-center rounded-xl text-black"/>
  -----------------------------------------------------------------------------------------------------------------
 <input type="number" id="quantity_643eca8e89940" class="input-text qty text" step="1" min="1" max="10" name="quantity" value="1" title="Cantidad" size="4" placeholder="" inputmode="">
 
    <button type="submit" name="add-to-cart" value="101261" class="single_add_to_cart_button button alt wp-element-button">Añadir al carrito</button>
    -----------------------------------------------------------------------------------------------------------------
  
jQuery(function($) { 
		
		// Make the code work after page load.
		$(document).ready(function(){			
			QtyChng();		
		});

		// Make the code work after executing AJAX.
		$(document).ajaxComplete(function () {
			QtyChng();
		});
		
			function QtyChng() {
				$(document).off("click", ".qib-button").on( "click", ".qib-button", function() {
		// Find quantity input field corresponding to increment button clicked.
		var qty = $( this ).siblings( ".quantity" ).find( ".qty" );
		// Read value and attributes min, max, step.
		var val = parseFloat(qty.val());
		var max = parseFloat(qty.attr( "max" ));
		var min = parseFloat(qty.attr( "min" ));		
		var step = parseFloat(qty.attr( "step" ));
		
		// Change input field value if result is in min and max range.
		// If the result is above max then change to max and alert user about exceeding max stock.
		// If the field is empty, fill with min for "-" (0 possible) and step for "+".
		if ( $( this ).is( ".plus" ) ) {
			if ( val === max ) return false;				   
			if( isNaN(val) ) {
				qty.val( step );			
			} else if ( val + step > max ) {
				qty.val( max );
			} else {
				qty.val( val + step );
			}	   
		} else {			
			if ( val === min ) return false;
			if( isNaN(val) ) {
				qty.val( min );
			} else if ( val - step < min ) {
				qty.val( min );
			} else {
				qty.val( val - step );
			}
		}
		
		qty.val( Math.round( qty.val() * 100 ) / 100 );
		qty.trigger("change");
		$( "body" ).removeClass( "sf-input-focused" );
		});
			}
			


		
			jQuery(document).on( "click", ".quantity input", function() {
				return false;
			});
			
			jQuery(document).on( "change input", ".quantity .qty", function() {					
				
				var add_to_cart_button = jQuery( this ).closest( ".product" ).find( ".add_to_cart_button" );

				// For AJAX add-to-cart actions				
				add_to_cart_button.attr( "data-quantity", jQuery( this ).val() );

				// For non-AJAX add-to-cart actions
				add_to_cart_button.attr( "href", "?add-to-cart=" + add_to_cart_button.attr( "data-product_id" ) + "&quantity=" + jQuery( this ).val() );				
			});
			
		
 });
