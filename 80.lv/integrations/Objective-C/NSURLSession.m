#import <Foundation/Foundation.h>

NSDictionary *headers = @{ @"X-ApiTube-Key": @"YOUR-KEY-HERE"};

NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:[NSURL URLWithString:@"https://api_dev.apitube.io/v1/sets/30054214?limit=250&offset=0"]
                                                       cachePolicy:NSURLRequestUseProtocolCachePolicy
                                                   timeoutInterval:10.0];
[request setHTTPMethod:@"GET"];
[request setAllHTTPHeaderFields:headers];

NSURLSession *session = [NSURLSession sharedSession];
NSURLSessionDataTask *dataTask = [session dataTaskWithRequest:request
                                            completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {
	                                            if (error) {
		                                            NSLog(@"%@", error);
	                                            } else {
		                                            NSHTTPURLResponse *httpResponse = (NSHTTPURLResponse *) response;
		                                            NSLog(@"%@", httpResponse);
	                                            }
                                            }];
[dataTask resume];
